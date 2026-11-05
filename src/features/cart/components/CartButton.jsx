import { Link } from "react-router";

import { Bag2 } from "iconsax-reactjs";

import Polygon from "@/components/ui/Icon/Polygon";

function CartButton() {
  const itemCount = 0;

  return (
    <div className="relative">
      <Link
        to="/cart"
        className="relative flex-center size-6.5 lg:size-12 rounded-xl lg:bg-primary"
      >
        {itemCount > 0 && (
          <span className="absolute -left-1 -top-0.75 size-4.5 rounded-full hidden lg:flex-center bg-secondary font-IRANSansX-Bold lg:text-xs text-white">
            {itemCount}
          </span>
        )}
        <Bag2 className=" lg:text-white" />
      </Link>

      <Polygon
        size={20}
        className="hidden lg:block absolute inset-x-0 mx-auto -bottom-6 z-20"
      />
    </div>
  );
}

export default CartButton;
