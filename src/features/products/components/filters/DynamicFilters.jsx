import { useId } from "react";
import { useSearchParams } from "react-router";

import ColorFilterLabel from "./ColorFilterLabel";
import DynamicFilterItem from "./DynamicFilterItem";

function DynamicFilters({
  itemsClass = "",
  options = [],
  slug,
  type,
  onToggleFilter,
}) {
  const inputId = useId();
  const [searchParams] = useSearchParams();
  const selectedColors = searchParams.getAll("color");
  const selectedFilter = searchParams.getAll(slug);

  if (slug === "color") {
    return (
      <ul
        className={`filter-wrapper flex-ic flex-col gap-2 px-1 max-h-[208px] overflow-auto ${itemsClass}`}
      >
        {options.map((option) => (
          <li className="w-full flex-between gap-4" key={option.value}>
            <ColorFilterLabel
              option={option}
              inputId={inputId}
              onToggleFilter={onToggleFilter}
              selectedColors={selectedColors}
            />
          </li>
        ))}
      </ul>
    );
  }

  if (!type) {
    return (
      <div className="filter-wrapper grid grid-cols-2 xl:grid-cols-3 gap-y-2.5 gap-x-3 max-h-26.25 overflow-auto font-IRANSansX-Medium *:flex-center *:cursor-pointer">
        {options.map((option) => (
          <span
            onClick={() => onToggleFilter(slug, option.value)}
            className={`flex-center h-7 text-center text-[10px] px-1 rounded-sm bg-ededed ${selectedFilter.includes(option.value) ? "bg-secondary-400 text-white" : "bg-ededed"} transition-all`}
            key={option.value}
          >
            {option.label}
          </span>
        ))}
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <ul
        className={`filter-wrapper flex-ic flex-col gap-2 px-1 max-h-[208px] overflow-auto ${itemsClass}`}
      >
        {options.map((option) => (
          <li className="w-full flex-between gap-4" key={option.value}>
            <DynamicFilterItem
              slug={slug}
              inputId={inputId}
              option={option}
              onToggleFilter={onToggleFilter}
              selectedFilter={selectedFilter}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default DynamicFilters;
