import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { Sort } from "iconsax-reactjs";

import useProductQuery from "@/features/products/hooks/useProductQuery";
import Close from "@/components/ui/Icon/Close";
import RadioButton from "@/components/ui/RadioButton";
import { sortItems } from "@/features/products/constants";

function MobileProductSort({ showSortButton }) {
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const { changeSort } = useProductQuery();
  const selectedSort = searchParams.get("sort") ?? "newest";

  const openProductSort = () => {
    setIsOpen(true);
  };

  const closeProductSort = () => {
    setIsOpen(false);
  };

  const handleSortProducts = (e) => {
    const clickedSort = e.target.closest("INPUT").value;
    changeSort(clickedSort);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {showSortButton && (
        <button className="flex-ic gap-2" onClick={openProductSort}>
          <Sort />
          <span>مرتب سازی بر اساس</span>
        </button>
      )}
      <div
        className={`${!isOpen ? "translate-y-full" : ""} lg:hidden fixed left-0 right-0 top-4/10 z-20 bottom-0 bg-white rounded-t-medium transition-all duration-250`}
      >
        <div className="flex-between border-b border-ededed p-5">
          <span className="text-base font-IRANSansX-DemiBold">
            مرتب سازی بر اساس
          </span>
          <button onClick={closeProductSort}>
            <Close size={20} />
          </button>
        </div>
        <ul className="divide-y divide-ededed px-5 text-404040">
          {sortItems.map((item, index) => (
            <li key={index} className="flex-between">
              <label
                htmlFor={`radio-${item.value}`}
                className="w-full py-6 cursor-pointer"
              >
                {item.label}
              </label>
              <RadioButton
                id={`radio-${item.value}`}
                name="sort"
                value={item.value}
                checked={selectedSort === item.value}
                onChange={(e) => handleSortProducts(e)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        id="overlay"
        onClick={closeProductSort}
        className={`${isOpen ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 z-10 lg:hidden backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)] transition-all duration-250`}
      ></div>
    </>
  );
}

export default MobileProductSort;
