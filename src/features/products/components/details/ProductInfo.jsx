import Star from "@/components/ui/Icon/Star";

import { formatPrice, getDiscountedPrice } from "@/utils/helper";
import ProductGallery from "./ProductGallery";
import ProductSizes from "./ProductSizes";
import ProductColors from "./ProductColors";
import ProductActions from "./ProductActions";

function ProductInfo({ product }) {
  const {
    name,
    slug,
    variants,
    price,
    discount,
    images,
    averageRating,
    availableSizes,
    availableColors,
  } = product;

  const finalPrice = getDiscountedPrice(price, discount);

  return (
    <section className="flex-between flex-col lg:flex-row gap-5 lg:gap-6 select-none mt-8 mb-8 lg:mb-22.5">
      <ProductGallery images={images} slug={slug} />

      <div className="flex w-full lg:w-1/2 flex-col justify-between gap-4 lg:gap-5 lg:h-122.5">
        {/* Title */}
        <div className="flex justify-between gap-4 items-start">
          <div className="w-full">
            <h1 className="text-2xl lg:text-[28px] line-clamp-2 leading-9 font-IRANSansX-Medium text-neutral-black">
              {name}
            </h1>
            <p className="mt-2 text-sm text-868686">
              {slug?.replaceAll("-", " ")}
            </p>
          </div>

          {averageRating > 0 && (
            <div className="flex-ic gap-0.5 rounded-sm px-2 py-1 bg-orange-50">
              <Star size={24} fill="#FF991F" />
              <span className="text-primary-900">{averageRating}</span>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex w-full flex-col items-end lg:items-start gap-2 order-1 lg:order-0 font-IRANSansX-Medium">
          <span className="lg:font-IRANSansX-DemiBold text-2xl lg:text-[32px] font-bold text-gray-900">
            {formatPrice(finalPrice)} تومان
          </span>

          {discount > 0 && (
            <div className="flex-ic gap-6 lg:gap-10">
              <span className="text-2xl text-adadad line-through">
                {formatPrice(price)}
              </span>
              <span className="w-16.5 lg:w-15.5 flex-center font-IRANSansX-DemiBold text-[18px] lg:font-IRANSansX-Medium lg:text-base rounded-small bg-orange-500 py-2.5 lg:py-1.5 text-white">
                {discount}%
              </span>
            </div>
          )}
        </div>

        <ProductSizes availableSizes={availableSizes} />

        <ProductColors availableColors={availableColors} />

        <ProductActions />
      </div>
    </section>
  );
}

export default ProductInfo;
