import api from "@/services/api";

const getAllProducts = async (query, signal) => {
  const { data } = await api.get(`/products?${query}`, { signal });
  return data;
};

const getRelatedProducts = async (slug) => {
  const { data } = await api.get(`/products/${slug}/related`);
  return data;
};

const getProduct = async (slug) => {
  const { data } = await api.get(`/products/${slug}`);

  return data;
};

export { getAllProducts, getRelatedProducts, getProduct };
