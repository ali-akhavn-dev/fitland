import { useLocation, useNavigate, useSearchParams } from "react-router";

function useProductQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const updateQuery = (changeParams, resetPage = true) => {
    setSearchParams(
      (prevParams) => {
        console.log(prevParams)
        const params = new URLSearchParams(prevParams);
        changeParams(params);

        if (resetPage) {
          params.set("page", "1");
        }

        return params;
      },
      { preventScrollReset: true },
    );
  };

  const toggleArrayFilter = (key, value) => {
    updateQuery((params) => {
      const currentValues = params.getAll(key);
      console.log(currentValues)

      const nextValues = currentValues.includes(value)
        ? currentValues.filter((currentValue) => currentValue !== value)
        : [...currentValues, value];

      params.delete(key);

      for (let nextValue of nextValues) {
        params.append(key, nextValue);
      }
    });
  };

  const toggleBooleanFilter = (key, enabled) => {
    updateQuery((params) => {
      if (enabled) {
        params.delete(key);
      } else {
        params.set(key, "true");
      }
    });
  };

  const togglePriceFilter = (key, value) => {
    updateQuery((params) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
  };

  const clearFilters = () => {
    setSearchParams(
      (prevParams) => {
        const searchQuery = prevParams.get("search");
        if (searchQuery) {
          return { page: "1", search: searchQuery };
        }
        return { page: "1" };
      },
      { preventScrollReset: true },
    );
  };

  const goToPage = (targetPage) => {
    updateQuery((params) => {
      params.set("page", targetPage);
    }, false);
  };

  const changeSort = (targetSort) => {
    updateQuery((params) => {
      params.set("sort", targetSort);
    });
  };

  const searchQuery = (search) => {
    const isProductsPage = location.pathname.includes("/products");

    if (!isProductsPage) {
      navigate("/products");
    }

    updateQuery((params) => {
      params.set("search", search);
    });
  };

  return {
    toggleArrayFilter,
    toggleBooleanFilter,
    togglePriceFilter,
    clearFilters,
    changeSort,
    goToPage,
    searchQuery,
  };
}

export default useProductQuery;
