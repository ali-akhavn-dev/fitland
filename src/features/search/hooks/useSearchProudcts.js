import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

import useProductQuery from "@/features/products/hooks/useProductQuery";
import { createProductsQuery } from "@/features/products/utils";
import {
  DEBOUNCE_TIME,
  MAX_RECENT_ITEMS,
  MIN_CHARS,
  RECENT_SEARCHES_KEY,
} from "@/constants/search";
import { getPopularSearches } from "../services/search.service";
import { getAllProducts } from "@/features/products/services/products.service";

function useSearchProudcts(inputRef, onCommit = () => {}) {
  const getRecentSearches = () => {
    return JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY)) ?? [];
  };

  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";

  const [search, setSearch] = useState(() => {
    return searchParams.get("search") ?? "";
  });
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [popularSearches, setPopularSearches] = useState([]);
  const [recentSearches, setRecentSearches] = useState(getRecentSearches);

  const query = createProductsQuery(searchParams, undefined, search);

  const { searchQuery } = useProductQuery();

  const handleChangeSearch = (e) => {
    const searchedValue = e.target.value.trim();
    setSearch(searchedValue);
  };

  const clearSearch = (focused = true) => {
    setSearch("");
    focused && inputRef.current.focus();
  };

  const replaceSearch = (term) => {
    setSearch(term);
    inputRef.current.focus();
  };

  const fillRecentSearches = () => {
    const term = search.trim();

    setRecentSearches((prev) =>
      [term, ...prev.filter((item) => item !== term)].slice(
        0,
        MAX_RECENT_ITEMS,
      ),
    );
  };

  const removeRecentSearches = () => {
    setRecentSearches([]);
  };

  const handleCommitSearch = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    if (search.trim().length >= 2) {
      searchQuery(search);
      onCommit();
      fillRecentSearches();
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchSearchedProducts = async () => {
      if (search.trim().length < MIN_CHARS) {
        setStatus("idle");
        setProducts([]);
        controller.abort();
        return;
      }

      try {
        const res = await getAllProducts(query, signal);

        if (res.success) {
          setProducts(res.data.products);
          setStatus("success");
        }
      } catch (error) {
        setStatus("error");
        setProducts([]);
      }
    };

    const debouncedSearch = setTimeout(() => {
      setStatus("loading");
      fetchSearchedProducts();
    }, DEBOUNCE_TIME);

    return () => {
      controller.abort();
      clearInterval(debouncedSearch);
    };
  }, [search]);

  useEffect(() => {
    const fetchPopularSearches = async () => {
      try {
        const res = await getPopularSearches();

        if (res.success) {
          setPopularSearches(res.data.terms);
        }
      } catch (error) {
        setPopularSearches([]);
        // console.log(error);
      }
    };

    fetchPopularSearches();
  }, []);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recentSearches));
  }, [recentSearches]);

  return {
    search,
    products,
    status,
    popularSearches,
    recentSearches,
    handleChangeSearch,
    handleCommitSearch,
    removeRecentSearches,
    clearSearch,
    replaceSearch,
  };
}

export default useSearchProudcts;
