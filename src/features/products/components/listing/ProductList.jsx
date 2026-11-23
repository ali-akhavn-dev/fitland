import { Warning2 } from "iconsax-reactjs";

import ProductCard from "./ProductCard";
import ProductCardSkelton from "@/components/ui/Skelton/ProductCardSkelton";
import NoProducts from "../NoProducts";
import NoFilterResults from "../NoFilterResults";

function ProductList({ products, isLoading, error, limit, hasFilter }) {
  if (error) {
    return (
      <div className="flex-center gap-3 text-center mt-10">
        <Warning2 color="red" />
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 mb-8">
        {Array.from({ length: limit }).map((_, index) => (
          <ProductCardSkelton key={index} />
        ))}
      </div>
    );
  }

  if (isLoading === false && hasFilter && products.length === 0) {
    return <NoFilterResults />;
  }

  if (isLoading === false && !hasFilter && products.length === 0) {
    return <NoProducts />;
  }

  if (!isLoading && !error && products.length > 0) {
    return (
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 mb-8">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
