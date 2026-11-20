import { Warning2 } from "iconsax-reactjs";

import ProductCard from "./ProductCard";
import ProductCardSkelton from "@/components/ui/Skelton/ProductCardSkelton";

function ProductList({ products, isLoading, error, limit }) {
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
