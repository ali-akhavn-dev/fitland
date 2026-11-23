const sortItems = [
  { label: "جدیدترین", value: "newest" },
  { label: "پربازدیدترین", value: "mostViewed" },
  { label: "پرفروش ترین", value: "bestSelling" },
  { label: "گران ترین", value: "priceDesc" },
  { label: "ارزان ترین", value: "priceAsc" },
];

const FILTER_KEYS = [
  "inStock",
  "hasDiscount",
  "minPrice",
  "maxPrice",
  "material",
  "fit",
  "color",
  "size",
  "brand",
];

export { FILTER_KEYS, sortItems };
