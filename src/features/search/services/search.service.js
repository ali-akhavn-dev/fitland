import api from "@/services/api";

export const getPopularSearches = async () => {
  const { data } = await api.get("/search/popular");
  return data;
};