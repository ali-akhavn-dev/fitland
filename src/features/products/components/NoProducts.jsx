import { useParams } from "react-router";

import { Home2 } from "iconsax-reactjs";

import noProducts from "@/assets/images/no-result.png";
import NavButton from "@/components/ui/Button/NavButton";

function NoProducts() {
  const params = useParams();

  return (
    <div className="flex-center flex-col gap-10">
      <div>
        <img src={noProducts} alt="" />
      </div>
      <span className="font-IRANSansX-Bold text-2xl text-secondary">
        هیچ محصولی یافت نشد!
      </span>

      <NavButton
        to={`/category/${params.categorySlug}`}
        text="برگشت به دسته‌بندی"
        className="bg-secondary-400 h-14 lg:h-10! w-full lg:w-auto lg:px-5 font-IRANSansX-Medium lg:font-IRANSansX-Bold text-base!"
      >
        <Home2 />
      </NavButton>
    </div>
  );
}

export default NoProducts;
