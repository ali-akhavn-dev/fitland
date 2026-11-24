import { useSearchParams } from "react-router";

import useProductQuery from "../../hooks/useProductQuery";
import { sortItems } from "../../constants";

function ProductSort() {
  const [searchParams] = useSearchParams();
  const { changeSort } = useProductQuery();

  const selectedSort = searchParams.get("sort") ?? "newest";

  const handleSortProducts = (e) => {
    const clickedSort = e.target.closest("LI").dataset.sort;
    changeSort(clickedSort);
  };

  return (
    <>
      <ul className="hidden lg:flex-ic gap-4 h-8 text-404040">
        {sortItems.map((item, index) => (
          <li
            onClick={handleSortProducts}
            data-sort={item.value}
            key={index}
            className={`px-2 cursor-pointer relative after:absolute after:w-full after:h-px after:bg-primary after:-bottom-1 after:inset-x-0 ${selectedSort === item.value ? "text-primary" : "after:invisible"} transition-all`}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductSort;
