import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { Setting4 } from "iconsax-reactjs";

import Close from "@/components/ui/Icon/Close";
import Switch from "@/components/ui/Switch";
import AccordionWrapper from "@/components/ui/Accordion/AccordionWrapper";
import Accordion from "@/components/ui/Accordion/Accordion";
import { formatPrice } from "@/utils/helper";
import DynamicFilters from "./DynamicFilters";
import useProductQuery from "../../hooks/useProductQuery";

function MobileProductFilter({ priceRange, facets, total, showFilterButton }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const {
    toggleArrayFilter,
    toggleBooleanFilter,
    togglePriceFilter,
    clearFilters,
  } = useProductQuery();

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const openProductFilter = () => setIsOpen(true);

  const closeProductFilter = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {showFilterButton && (
        <button className="flex-ic gap-2" onClick={openProductFilter}>
          <Setting4 />
          <span>فیلترها</span>
        </button>
      )}

      {facets.length > 0 && (
        <div
          className={`${!isOpen ? "translate-y-full" : ""} lg:hidden fixed left-0 right-0 top-0 z-20 bottom-0 bg-white transition-all duration-250`}
        >
          <div className="flex-between border-b border-ededed p-5">
            <span className="text-base font-IRANSansX-DemiBold">فیلترها</span>
            <button onClick={closeProductFilter}>
              <Close size={20} />
            </button>
          </div>

          <div
            id="content"
            className="px-5 pt-5 *:pb-3 divide-y divide-ededed overflow-auto"
          >
            <div className="space-y-2">
              <span className="block mb-3 font-IRANSansX-DemiBold">دسترسی</span>
              <div className="flex-between">
                <span>محصولات موجود</span>
                <Switch type="stock" onToggleFilter={toggleBooleanFilter} />
              </div>
              <div className="flex-between">
                <span>محصولات تخفیف دار</span>
                <Switch type="discount" onToggleFilter={toggleBooleanFilter} />
              </div>
            </div>

            <AccordionWrapper customClass="*:py-2 *:!border-b-ededed">
              <Accordion
                title="قیمت"
                headerClass="h-10 !text-neutral-black"
                bodyClass="pt-6"
                hasSeparator
              >
                {/* <PriceRangeSlider /> */}
              </Accordion>

              {facets.map((facet) => (
                <Accordion
                  key={facet.slug}
                  title={facet.name}
                  headerClass="h-10 !text-neutral-black"
                  bodyClass="pt-6"
                  hasSeparator
                >
                  <DynamicFilters
                    {...facet}
                    onToggleFilter={toggleArrayFilter}
                  />
                </Accordion>
              ))}
            </AccordionWrapper>
          </div>

          <div className="fixed bottom-0 z-20 w-full flex-between border-t border-ededed py-4 px-5 bg-white font-IRANSansX-Medium">
            <button
              onClick={closeProductFilter}
              className="btn h-10 px-10 bg-primary text-white rounded-small active:scale-98 transition-all"
            >
              نمایش {formatPrice(total)} کالا
            </button>
            <button
              onClick={() => clearFilters()}
              className="btn h-10 px-4 rounded-small"
            >
              پاک کردن فیلترها
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileProductFilter;
