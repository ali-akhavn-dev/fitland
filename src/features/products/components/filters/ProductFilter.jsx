import { useSearchParams } from "react-router";

import Accordion from "@/components/ui/Accordion/Accordion";
import AccordionWrapper from "@/components/ui/Accordion/AccordionWrapper";
import Switch from "@/components/ui/Switch";
import DynamicFilters from "./DynamicFilters";
import ProductFilterSkelton from "@/components/ui/Skelton/ProductFilterSkelton";
import useProductQuery from "../../hooks/useProductQuery";
import PriceRangeSlider from "./PriceRangeSlider";

function ProductFilter({ priceRange, facets }) {
  const {
    toggleArrayFilter,
    toggleBooleanFilter,
    togglePriceFilter,
    clearFilters,
  } = useProductQuery();

  const [searchParams] = useSearchParams();
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  return (
    <>
      {facets.length > 0 ? (
        <aside className="col-span-1 hidden lg:block h-fit sticky top-5 rounded-medium px-3 xl:px-4.5 py-4 mb-12 border border-cbcbcb font-IRANSansX-Medium text-neutral-black select-none">
          <div className="flex-between text-sm">
            <span>فیلترها</span>
            <button onClick={clearFilters} className="text-868686">
              حذف فیلترها
            </button>
          </div>

          <div className="space-y-2 my-10">
            <div className="flex-between">
              <span>محصولات موجود</span>
              <Switch type="stock" onToggleFilter={toggleBooleanFilter} />
            </div>
            <div className="flex-between">
              <span>محصولات تخفیف دار</span>
              <Switch type="discount" onToggleFilter={toggleBooleanFilter} />
            </div>
          </div>

          <AccordionWrapper customClass="space-y-4">
            <Accordion
              title="قیمت"
              headerClass="h-10 !text-neutral-black"
              bodyClass="pt-6"
            >
              <PriceRangeSlider
                min={0}
                max={priceRange.max ?? 10_000_000}
                onToggleFilter={togglePriceFilter}
                minFilter={minPrice && Number(minPrice)}
                maxFilter={maxPrice && Number(maxPrice)}
              />
            </Accordion>

            {facets.map((facet) => (
              <Accordion
                key={facet.slug}
                title={facet.name}
                headerClass="h-10 !text-neutral-black"
                bodyClass="pt-6"
              >
                <DynamicFilters
                  {...facet}
                  type={facet.type}
                  onToggleFilter={toggleArrayFilter}
                />
              </Accordion>
            ))}
          </AccordionWrapper>
        </aside>
      ) : (
        <ProductFilterSkelton />
      )}
    </>
  );
}

export default ProductFilter;
