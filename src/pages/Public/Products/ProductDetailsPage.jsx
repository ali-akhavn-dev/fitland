import ProductInfo from "@/features/products/components/details/ProductInfo";
import useProduct from "@/features/products/hooks/useProduct";
import { useParams } from "react-router";

function ProductDetailsPage() {
  const { productSlug } = useParams();
  const { product, isLoading, error } = useProduct(productSlug);

  return (
    !isLoading &&
    !error &&
    product && (
      <>
        <div className="container">
          <ProductInfo product={product} />
        </div>
      </>
    )
  );
}

export default ProductDetailsPage;
