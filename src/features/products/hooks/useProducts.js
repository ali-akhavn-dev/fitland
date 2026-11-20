import { useEffect, useState } from "react";

import { getAllProducts } from "../services/products.service";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [facets, setFacets] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [priceRange, setPriceRange] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const res = await getAllProducts(signal);
        if (signal.aborted) return;

        console.log(res);
        if (res.success) {
          setProducts(res.data.products);
          setBreadcrumb(res.data.breadcrumb);
          setPagination(res.pagination);
          setFacets(res.facets.filters);
          setPriceRange(res.facets.static.price);
        } else {
          setError("خطا در دریافت محصولات");
        }
      } catch (err) {
        if (signal.aborted) return;
        setError(err?.data?.message ?? "خطا در دریافت محصولات");
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      document.getElementById("header")?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToTop();
  }, []);

  return {
    products,
    facets,
    breadcrumb,
    priceRange,
    isLoading,
    error,
    pagination,
  };
}

export default useProducts;
