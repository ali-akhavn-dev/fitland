import { useNavigate } from "react-router";

import { Clock, TrendUp } from "iconsax-reactjs";

import DropdownSearchInfo from "./DropdownSearchInfo";
import SearchResults from "./SearchResults";

function DropdownSearchBox({
  search,
  terms,
  results,
  status,
  onClose,
  onClear,
  onRemove,
  onReplace,
  onCommitSearch,
  recentSearches,
}) {
  const navigate = useNavigate();

  const navigateToProduct = (slug) => {
    navigate(`/product/${slug}`);
    onClose();
    onClear(false);
  };

  return (
    <div
      className={`search-dropdown absolute inset-x-0 ${status === "success" ? "h-[514px] -bottom-[515px] lg:h-[570px] lg:-bottom-[571px] space-y-6" : "h-76 -bottom-76 lg:h-64 lg:-bottom-[257px] space-y-8"} z-50 overflow-auto rounded-b-medium p-6 pb-10 border-x border-b border-cbcbcb bg-white`}
    >
      {status === "idle" && (
        <>
          <DropdownSearchInfo
            text="جستجو های اخیر"
            Icon={<Clock size={18} />}
            hasTrash
            items={recentSearches}
            onRemove={onRemove}
            onReplace={onReplace}
          />
          <DropdownSearchInfo
            text="جستجو های پرطرفدار"
            Icon={<TrendUp size={18} />}
            items={terms}
            onReplace={onReplace}
            className=""
          />
        </>
      )}

      {status === "loading" && <p>در حال جستجو ...</p>}

      {status === "success" && results.length === 0 && (
        <div className="w-max py-2 px-4 bg-error-1 rounded-small">
          <p className="text-xs lg:text-sm text-error-3">
            متاسفانه نتیجه ای با این عبارت یافت نشد.
          </p>
        </div>
      )}

      {status === "success" && results.length > 0 && (
        <>
          <SearchResults
            search={search}
            results={results}
            onCommitSearch={onCommitSearch}
            onNavigate={navigateToProduct}
          />

          <DropdownSearchInfo
            items={terms}
            text="جستجو های پرطرفدار"
            Icon={<TrendUp size={18} className="text-primary" />}
            className="border-t border-cbcbcb pt-4"
            onReplace={onReplace}
          />
        </>
      )}
    </div>
  );
}

export default DropdownSearchBox;
