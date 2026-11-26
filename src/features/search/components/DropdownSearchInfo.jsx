import { Link } from "react-router";

import { Trash } from "iconsax-reactjs";

function DropdownSearchInfo({
  Icon,
  text,
  className,
  hasTrash = false,
  items = [],
  onRemove,
  onReplace,
}) {
  return (
    items.length > 0 && (
      <div className={`font-IRANSansX-Medium text-sm text-404040 ${className}`}>
        <div className="flex-between">
          <div className="flex-ic gap-1">
            {Icon}
            <span>{text}</span>
          </div>

          {hasTrash && (
            <button onClick={onRemove}>
              <Trash size={18} className="text-error-2" />
            </button>
          )}
        </div>

        <div className="text-[10px] mt-6">
          <ul className="flex-ic gap-2 flex-wrap">
            {items.map((term, index) => (
              <li
                onClick={() => onReplace(term)}
                key={index}
                className="w-20 h-8 lg:w-26 lg:h-[35px] rounded-[10px] bg-ededed"
              >
                <Link className="size-full flex-center">{term}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default DropdownSearchInfo;
