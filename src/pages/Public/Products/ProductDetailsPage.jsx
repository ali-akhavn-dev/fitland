import useProduct from "@/features/products/hooks/useProduct";
import { useParams } from "react-router";

function ProductDetailsPage() {
  const { productSlug } = useParams();

  const { product, isLoading, error } = useProduct(productSlug)

  console.log(isLoading, product)

  return <div>ProductDetailsPage</div>;
}

export default ProductDetailsPage;
