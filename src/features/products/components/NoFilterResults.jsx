import { useLocation } from "react-router";

import { Home2 } from "iconsax-reactjs";

import NavButton from "@/components/ui/Button/NavButton";
import noData from "@/assets/images/product/no-filter-data.png";

function NoFilterResults() {
  const location = useLocation();

  return (
    <div className="flex-center flex-col gap-10">
      <div>
        <img src={noData} alt="" />
      </div>
      <span className="font-IRANSansX-DemiBold lg:font-IRANSansX-Bold text-[18px] lg:text-2xl text-secondary">
        متاسفانه نتیجه‌ای برای این فیلتر یافت نشد :(
      </span>

      <NavButton
        to={location.pathname}
        text="برگشت به دسته‌بندی"
        className="bg-secondary-400 h-14 lg:h-10! w-full lg:w-auto lg:px-5 font-IRANSansX-Medium lg:font-IRANSansX-Bold text-base!"
      >
        <Home2 />
      </NavButton>
    </div>
  );
}

export default NoFilterResults;
