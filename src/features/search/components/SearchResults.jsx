import { ArrowLeft2 } from "iconsax-reactjs";

import { BASE_URL_IMAGE } from "@/constants";

function SearchResults({ search, results, onCommitSearch, onNavigate }) {
  return (
    <>
      <div className="flex-between gap-4 font-IRANSansX-Medium text-sm text-neutral-black mb-4">
        <div className="hidden sm:block">
          کالاهای مربوط به <span className="text-primary">{search}</span>
        </div>
        <div
          onClick={onCommitSearch}
          className="flex-between gap-1 cursor-pointer"
        >
          <span className="text-xs lg:text-sm">مشاهده همه نتایج</span>
          <ArrowLeft2 size={16} />
        </div>
      </div>
      
      <div className="search-results overflow-auto" dir="ltr">
        <div className="h-63 lg:h-81 space-y-3 mr-2" dir="rtl">
          {results.map((product) => (
            <div
              key={product._id}
              className="px-3 py-2 rounded-small bg-ededed cursor-pointer"
            >
              <div
                onClick={() => onNavigate(product.slug)}
                to={`/product/${product.slug}`}
                className="flex-between text-sm"
              >
                <div className="flex-ic gap-3">
                  <div className="size-14 overflow-hidden rounded-sm bg-cbcbcb">
                    <img
                      className="size-full object-contain"
                      src={`${BASE_URL_IMAGE}${product.images[0]}`}
                      alt={product.slug}
                    />
                  </div>
                  <span className="line-clamp-1">{product.name}</span>
                </div>
                <ArrowLeft2 size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
