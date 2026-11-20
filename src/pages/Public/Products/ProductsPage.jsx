import useProducts from "@/features/products/hooks/useProducts";
import ProductList from "@/features/products/components/listing/ProductList";
import Pagination from "@/components/ui/Pagination/Pagination";

function ProductsPage() {
  const {
    products,
    facets,
    priceRange,
    pagination,
    isLoading,
    error,
    breadcrumb,
  } = useProducts();

  return (
    <div className="container">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-10 mb-8">
          <section className={`col-span-2 lg:col-span-full`}>
            <ProductList
              limit={pagination?.limit}
              products={products}
              isLoading={isLoading}
              error={error}
            />

            {!isLoading && !error && pagination?.totalPages > 1 && (
              <Pagination
                totalPages={pagination?.totalPages}
                page={pagination?.page}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
