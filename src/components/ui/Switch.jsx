import { useState } from "react";
import { useSearchParams } from "react-router";

function Switch({ type, onToggleFilter }) {
  const [searchParams] = useSearchParams();

  const inStock = searchParams.get("inStock") === "true";
  const hasDiscount = searchParams.get("hasDiscount") === "true";
  const switchFilter = type === "stock" ? inStock : hasDiscount;

  const [isToggle, setIsToggle] = useState(() => {
    if (type === "stock") {
      return inStock;
    }
    return hasDiscount;
  });

  const handleToggle = () => {
    setIsToggle((prev) => !prev);

    if (type === "stock") {
      onToggleFilter("inStock", isToggle);
    } else {
      onToggleFilter("hasDiscount", isToggle);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`flex-ic justify-end w-12 h-7 p-1 rounded-full ${switchFilter ? "bg-secondary" : "bg-cbcbcb"} transition-all cursor-pointer`}
    >
      <span
        className={`size-5 ${switchFilter ? "translate-x-5" : "translate-x-0"} transition-all rounded-full bg-white`}
      ></span>
    </button>
  );
}

export default Switch;
