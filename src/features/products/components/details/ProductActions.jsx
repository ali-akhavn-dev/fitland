import { Add, ArrowLeft2, Minus } from "iconsax-reactjs";

import NavButton from "@/components/ui/Button/NavButton";
import AddCard from "@/components/ui/Icon/AddCard";
import Button from "@/components/ui/Button/Button";

function ProductActions() {
  return (
    <>
      <div className="w-full grid grid-cols-2 lg:flex lg:justify-between gap-4 lg:gap-6 mt-auto order-2 lg:order-0">
        <div className="flex-center font-IRANSansX-Light! w-26 lg:w-29 h-10 lg:h-14 gap-4 rounded-small border-2 border-primary text-primary">
          <button>
            <Add className="size-5 lg:size-6" />
          </button>

          <span className="font-IRANSansX-Medium">1</span>

          <button>
            <Minus size={24} />
          </button>
        </div>

        {/* <NavButton
          to="/cart"
          text="مشاهده سبد خرید"
          className="h-full! grow border-2 bg-transparent mr-auto px-3 font-IRANSansX-Medium! sm:text-sm text-primary!"
          dir="ltr"
        >
          <ArrowLeft2 className="hidden min-[360px]:block size-5 lg:size-6" />
        </NavButton> */}

        <Button
          text="افزودن به سبد خرید"
          className="lg:max-w-85 h-11 col-span-full lg:grow lg:h-14 text-sm text-white"
        >
          <AddCard size={24} />
        </Button>
      </div>
    </>
  );
}

export default ProductActions;
