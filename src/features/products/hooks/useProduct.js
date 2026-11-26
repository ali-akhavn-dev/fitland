import { useEffect, useState } from "react";

import { getProduct } from "../services/products.service";

function useProduct(slug) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProduct = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const { data } = await getProduct(slug);
        if (signal.aborted) return;
        data.product && setProduct(data.product);

      } catch (err) {
        if (signal.aborted) return;

        setError(err?.data?.message ?? "خطا در دریافت محصول");
        console.log(err.data);
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    if (slug) {
      fetchProduct();
    }

    return () => controller.abort();
  }, [slug]);

  return {
    product,
    isLoading,
    error,
  };
}

export default useProduct;
