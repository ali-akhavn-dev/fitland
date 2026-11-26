import { useRef, useState } from "react";

import { CloseSquare, SearchNormal } from "iconsax-reactjs";

import useSearchProudcts from "../hooks/useSearchProudcts";
import DropdownSearchBox from "./DropdownSearchBox";

function ProductSearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const handleAfterCommit = () => {
    closeDropdown();
    inputRef.current?.blur();
  };

  const {
    search,
    products,
    status,
    popularSearches,
    recentSearches,
    handleChangeSearch,
    handleCommitSearch,
    removeRecentSearches,
    clearSearch,
    replaceSearch,
  } = useSearchProudcts(inputRef, handleAfterCommit);

  return (
    <>
      <div
        className={`relative z-50 flex-ic w-full lg:w-140 xl:w-159.5 h-10 sm:h-12 mt-4.5 sm:mt-5 lg:mt-0 gap-2 sm:border border-cbcbcb bg-f9f9f9 lg:bg-white ${isOpen ? "rounded-t-medium" : "rounded-medium"} px-4`}
      >
        <SearchNormal className="shrink-0" color="#FA541C" />
        <input
          ref={inputRef}
          onFocus={openDropdown}
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleCommitSearch}
          type="text"
          placeholder="جستجو"
          className="w-full h-full font-IRANSansX-Light text-sm text-neutral-black"
        />
        {search && (
          <button onClick={clearSearch}>
            <CloseSquare size={20} color="#FA541C" />
          </button>
        )}

        {isOpen && (
          <DropdownSearchBox
            search={search}
            status={status}
            results={products}
            terms={popularSearches}
            onClose={closeDropdown}
            onClear={clearSearch}
            onCommitSearch={handleCommitSearch}
            onRemove={removeRecentSearches}
            onReplace={replaceSearch}
            recentSearches={recentSearches}
          />
        )}
      </div>

      <div
        onClick={closeDropdown}
        id="overlay"
        className={`fixed inset-0 ${!isOpen ? "invisible opacity-0" : ""} z-20 transition-all bg-[rgba(0,0,0,0.4)]`}
      ></div>
    </>
  );
}

export default ProductSearchBox;
