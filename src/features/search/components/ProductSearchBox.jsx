import { useRef, useState } from "react";

import { SearchNormal } from "iconsax-reactjs";

function ProductSearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <>
      <div
        className={`relative z-10 flex-ic w-full lg:w-140 xl:w-159.5 h-10 sm:h-12 mt-4.5 sm:mt-5 lg:mt-0 gap-2 sm:border border-cbcbcb bg-f9f9f9 lg:bg-white ${isOpen ? "rounded-t-medium" : "rounded-medium"} px-4`}
      >
        <SearchNormal className="shrink-0" color="#FA541C" />
        <input
          ref={inputRef}
          onFocus={openDropdown}
          type="text"
          placeholder="جستجو"
          className="w-full h-full font-IRANSansX-Light text-sm text-neutral-black"
        />
      </div>

      <div
        onClick={closeDropdown}
        id="overlay"
        className={`fixed inset-0 ${!isOpen ? "invisible opacity-0" : ""} z-5 transition-all bg-[rgba(0,0,0,0.4)]`}
      ></div>
    </>
  );
}

export default ProductSearchBox;
