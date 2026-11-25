import { useRef } from "react";

import { ArrowCircleLeft2 } from "iconsax-reactjs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import NavButton from "@/components/ui/Button/NavButton";
import slider1 from "@/assets/images/homepage/slider-1.png";
import slider2 from "@/assets/images/homepage/slider-2.png";
import ProductSliderCard from "@/features/products/components/listing/ProductSliderCard";
import SwiperButtons from "./SwiperButtons";
import useProducts from "@/features/products/hooks/useProducts";

function ProductSlider({ title, type, bgSliderName, href, titleClass }) {
  let queryParameters;

  switch (type) {
    case "discount":
      queryParameters = { hasDiscount: true };
      break;

    case "shoes":
      queryParameters = { search: "کفش" };
      break;

    default:
      queryParameters = {};
      break;
  }

  const { products, isLoading, error } = useProducts(
    undefined,
    queryParameters,
  );

  const swiperRef = useRef(null);

  const identifySwiperButtons = (swiper) => {
    swiperRef.current = swiper;
  };

  const bgImages = {
    "slider-1": slider1,
    "slider-2": slider2,
  };

  const sliderStyles = {
    backgroundImage: `url(${bgImages[bgSliderName]})`,
  };

  return (
    <div
      style={bgSliderName && sliderStyles}
      className={`bg-no-repeat bg-top bg-cover select-none mt-8 md:mt-15 lg:mt-20`}
    >
      <div className="container">
        <h2
          className={`text-center ${bgSliderName ? "lg:-translate-y-4" : ""} sm:font-IRANSansX-Medium lg:font-IRANSansX-DemiBold text-sm sm:text-lg lg:text-[28px] xl:text-[32px] text-secondary-700 ${titleClass}`}
        >
          {title}
        </h2>
        <NavButton
          to={href}
          className="max-w-fit h-8! hidden lg:flex text-secondary! text-lg! font-IRANSansX-DemiBold! justify-end pl-10 mr-auto mb-2"
          text="مشاهده همه"
        >
          <ArrowCircleLeft2 className="size-5 lg:size-6" />
        </NavButton>

        <div
          id="slider"
          className="relative pt-6 lg:pt-0 pb-4 lg:pb-9.5 lg:px-10"
        >
          <Swiper
            onBeforeInit={identifySwiperButtons}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop
          >
            {!isLoading &&
              products.length > 0 &&
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <ProductSliderCard {...product} />
                </SwiperSlide>
              ))}
          </Swiper>
          <SwiperButtons swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
