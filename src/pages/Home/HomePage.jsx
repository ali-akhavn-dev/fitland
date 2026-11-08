import { ArrowCircleLeft2 } from "iconsax-reactjs";

import Banner from "@/components/templates/Home/Banner";
import HeroSection from "@/components/templates/Home/HeroSection";
import ProductsShowCase from "@/components/templates/Home/ProductsShowCase";
import ProductSlider from "@/components/templates/Home/ProductSlider";
import Button from "@/components/ui/Button/Button";

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
          <Button
            text="مشاهده همه محصولات"
            className="hidden lg:flex w-59! h-12 font-IRANSansX-Bold! text-white bg-secondary"
          >
            <ArrowCircleLeft2 className="size-5 lg:size-6" />
          </Button>
        </div>
      </Banner>
      <ProductSlider
        bgSliderName="slider-1"
        title="تخفیفات ویژه"
        href="/products?hasDiscount=true"
      />
      <ProductSlider
        title="جدید ترین کفش های ورزشی"
        titleClass="font-IRANSansX-Bold"
      />
      <Banner to="/category/sports-equipment" bannerName="bike">
        <div className="lg:w-92.5 absolute right-4 top-9.5 md:top-20 xl:top-40 xl:right-37">
          <p className="font-IRANSansX-Medium lg:font-IRANSansX-Bold text-[10px] sm:text-base lg:text-2xl lg:mb-8 select-none">
            <span className="block font-IRANSansX-Regular">
              برای لذت بردن از مسیر
            </span>
            دوچرخه، اسکیت و اسکوتر بگیر
          </p>
          <Button
            text="مشاهده همه محصولات"
            className="hidden lg:flex w-59! h-12 font-IRANSansX-Bold! text-white bg-secondary"
          >
            <ArrowCircleLeft2 className="size-5 lg:size-6" />
          </Button>
        </div>
      </Banner>
      <ProductSlider
        title="تخفیفات ویژه"
        bgSliderName="slider-2"
        titleClass="font-IRANSansX-Bold"
      />
      <ProductsShowCase
        photo1="blose-3"
        photo2="blose-4"
        title="پرفروش ترین محصولات"
        href="/products/?sort=bestSelling"
      />
      <Banner to="/category/sports-equipment" bannerName="camping" />
    </>
  );
}

export default HomePage;
