import { useParams, useSearchParams } from "react-router";

import useProducts from "@/features/products/hooks/useProducts";
import ProductList from "@/features/products/components/listing/ProductList";
import Pagination from "@/components/ui/Pagination/Pagination";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FILTER_KEYS } from "@/features/products/constants";
import MobileProductFilter from "@/features/products/components/filters/MobileProductFilter";
import ProductFilter from "@/features/products/components/filters/ProductFilter";
import { formatPrice } from "@/utils/helper";
import ProductSort from "@/features/products/components/sorting/ProductSort";
import MobileProductSort from "./MobileProductSort";

function ProductsPage() {
  const { leafSlug, subCategorySlug, categorySlug } = useParams();
  const finalCategorySlug = leafSlug ?? subCategorySlug ?? categorySlug;

  const {
    products,
    facets,
    priceRange,
    pagination,
    isLoading,
    error,
    breadcrumb,
  } = useProducts(finalCategorySlug);

  const [searchParams] = useSearchParams();

  const areProudctsFilterd = () => {
    return FILTER_KEYS.some((key) => searchParams.toString().includes(key));
  };

  const hasFilter = areProudctsFilterd();
  const showFilterSections = !hasFilter || (hasFilter && products.length > 0);

  return (
    <div className="container">
      <div>
        <div className="flex-between lg:hidden text-sm mt-4">
          <MobileProductFilter
            priceRange={priceRange}
            facets={facets}
            total={pagination?.total}
            showFilterButton={showFilterSections}
          />

          <MobileProductSort showSortButton={showFilterSections} />
        </div>

        {showFilterSections && <Breadcrumb breadcrumb={breadcrumb} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-10 mb-8">
          {showFilterSections && (
            <ProductFilter
              facets={facets}
              priceRange={priceRange}
              showButton={showFilterSections}
            />
          )}

          <section
            className={`col-span-2 ${showFilterSections ? "lg:col-span-3" : "lg:col-span-full"}`}
          >
            {showFilterSections && (
              <div className="flex-between mb-6">
                <ProductSort />
                <span className="hidden lg:inline-block text-adadad select-none">
                  {formatPrice(pagination?.total)} کالا
                </span>
              </div>
            )}

            <ProductList
              limit={pagination?.limit}
              products={products}
              isLoading={isLoading}
              error={error}
              hasFilter={hasFilter}
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
