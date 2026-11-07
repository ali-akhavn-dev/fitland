import { ArrowCircleLeft2 } from "iconsax-reactjs";

import Banner from "@/components/templates/Home/Banner";
import HeroSection from "@/components/templates/Home/HeroSection";
import ProductsShowCase from "@/components/templates/Home/ProductsShowCase";
import NavButton from "@/components/ui/Button/NavButton";

function HomePage() {
  return (
    <>
      <HeroSection />

      <ProductsShowCase
        photo1="blose-1"
        photo2="blose-2"
        title="جدید ترین محصولات"
        href="/products/?sort=newest"
      />
      <Banner to="/category/sports-equipment" bannerName="sports-equipment">
        <div className="lg:w-92.5 absolute right-4 top-9.5 md:top-20 xl:top-40 xl:right-37">
          <p className="font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] sm:text-base lg:text-2xl lg:mb-8 select-none">
            <span className="block font-IRANSansX-Regular">برای حال خوب</span>
            لوازم ایروبیک و تناسب اندام بگیر
          </p>
          <NavButton
            to="/category/sports-equipment"
            className="hidden lg:flex lg:w-59 bg-secondary"
          >
            <ArrowCircleLeft2 className="size-5 lg:size-6" />
          </NavButton>
        </div>
      </Banner>
    </>
  );
}

export default HomePage;
