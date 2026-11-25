const createProductsQuery = ({
  searchParams,
  categorySlug,
  hasDiscount,
  search,
}) => {
  const query = new URLSearchParams(searchParams);

  const page = query.get("page");
  const limit = query.get("limit");

  if (categorySlug) {
    query.set("categorySlug", categorySlug);
  }

  if (hasDiscount) {
    query.set("hasDiscount", hasDiscount);
  }

  if (search) {
    query.set("search", search.trim());
  }

  if (!page) query.set("page", "1");

  if (!limit) query.set("limit", "12");

  return query.toString();
};

export { createProductsQuery };
