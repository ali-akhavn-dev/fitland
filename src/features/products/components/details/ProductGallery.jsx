import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { BASE_URL_IMAGE } from "@/constants";

function ProductGallery({ images, slug }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex w-full lg:w-1/2 flex-col gap-4 lg:gap-7.5">
      <Swiper
        className="w-full"
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <div className="h-95 overflow-hidden bg-cbcbcb">
                <img
                  src={`${BASE_URL_IMAGE}${image}`}
                  alt={slug}
                  className="size-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="flex-ic gap-6 h-20 relative *:absolute xl:*:static">
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images &&
            images.map((image, i) => (
              <SwiperSlide>
                <div className="product-thumbnail" style={{ right: i * 40 }}>
                  <img
                    src={`${BASE_URL_IMAGE}${image}`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* <div className="size-20 rounded-lg border border-cbcbcb bg-white left-0">
          <span className="text-xs text-gray-600">+۴ تصویر بیشتر</span>
        </div> */}
      </div>
    </div>
  );
}

export default ProductGallery;
