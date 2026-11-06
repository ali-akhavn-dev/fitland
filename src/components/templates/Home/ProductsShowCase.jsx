import { ArrowCircleLeft2 } from "iconsax-reactjs";

import NavButton from "@/components/ui/Button/NavButton";
import ProductCover from "./ProductCover";
import Blose1 from "@/assets/images/homepage/blose-1.jpg";
import Blose2 from "@/assets/images/homepage/blose-2.jpg";
import Blose3 from "@/assets/images/homepage/blose-3.jpg";
import Blose4 from "@/assets/images/homepage/blose-4.jpg";

function ProductsShowCase({ title, photo1, photo2, href }) {
  const photos = {
    "blose-1": Blose1,
    "blose-2": Blose2,
    "blose-3": Blose3,
    "blose-4": Blose4,
  };

  return (
    <div className="wrapper bg-[url(./../src/assets/images/homepage/curve.png)] bg-no-repeat bg-position-[0_100px] md:bg-position-[0_50px] lg:bg-position-[0_100px] bg-cover">
      <div className="container">
        <div className="flex justify-between items-end gap-20 lg:gap-0 mt-8 md:mt-15 lg:mt-20 pb-9 lg:pb-32">
          <div className="flex-ic gap-4 xl:gap-6">
            <ProductCover photo={photos[photo1]} brand="پوما" href="puma" />
            <ProductCover photo={photos[photo2]} brand="نایک" href="nike" />
          </div>

          <div className="w-50 lg:w-77.25 hidden md:block shrink-0">
            <span className="text-secondary font-IRANSansX-Bold xl:font-IRANSansX-DemiBold text-xl xl:text-2xl ">
              {title}
            </span>
            <p className="font-IRANSansX-Medium xl:font-IRANSansX-Bold text-sm xl:text-base text-606060 mt-2.5 mb-4">
              {title} با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل
              تحویل بگیرید.
            </p>
            <NavButton to={href} className="bg-primary">
              <ArrowCircleLeft2 className="size-5 lg:size-6" />
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsShowCase;
