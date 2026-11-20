import { Link } from "react-router";

import { BASE_URL_IMAGE } from "@/constants";
import Star from "@/components/ui/Icon/Star";
import { formatPrice, getDiscountedPrice } from "@/utils/helper";

function ProductCard({
  name,
  slug,
  price,
  discount,
  images,
  averageRating,
  availableSizes,
  availableColors,
  mobileDir = "row",
}) {
  const finalPrice = getDiscountedPrice(price, discount);

  return (
    <article
      className={`flex ${mobileDir === "col" ? "flex-col gap-2" : "md:flex-col gap-6 md:gap-4"} rounded-medium bg-f9f9f9 shadow-[0_0_2px_rgba(0,0,0,0.25)] select-none overflow-hidden`}
    >
      <Link
        to={`/product/${slug}`}
        className={`relative ${mobileDir === "col" ? "min-w-full" : "max-w-34 sm:max-w-42 md:max-w-max max-[380px]:max-w-26 md:min-w-full md:min-h-70"} shrink-0`}
      >
        {discount > 0 && (
          <div className="absolute top-0 right-0 flex-center text-[10px] md:text-sm text-white bg-primary w-10 h-4.5 md:w-18 md:h-7.25 rounded-bl-medium">
            %{discount}
          </div>
        )}
        <img
          src={`${BASE_URL_IMAGE}${images[0]}`}
          className="h-full object-cover"
          alt={slug}
        />
      </Link>

      <div
        className={`w-full flex flex-col justify-between gap-3 ${mobileDir === "col" ? "px-2 pb-4" : "pt-2 pb-4 pl-2 md:px-3 md:pt-0"} text-secondary-900`}
      >
        <div className="flex justify-between items-start min-h-10 md:h-12 gap-3">
          <Link
            to={`/product/${slug}`}
            className="text-xs md:text-base leading-5 md:leading-6 line-clamp-2"
          >
            {name}
          </Link>
          <div className="flex-ic gap-1">
            <span className="text-xs md:text-sm h-3 md:h-[17px]">
              {averageRating}
            </span>
            <Star fill="#FF991F" size={18} />
          </div>
        </div>

        <span className="h-4 text-[10px] md:text-xs">
          {availableSizes.length > 0 &&
            `از سایز ${availableSizes[0]} تا ${availableSizes[availableSizes.length - 1]}`}
        </span>

        <div className="flex-ic gap-1 text-xs md:text-sm">
          <span>
            {discount > 0 ? formatPrice(finalPrice) : formatPrice(price)} تومان
          </span>
          {discount > 0 && (
            <span className="line-through text-868686">
              {formatPrice(price)}
            </span>
          )}
        </div>

        <div id="colors" className="flex-ic h-4.5 relative -space-x-1.25">
          {availableColors.map((color, index) => (
            <span
              key={index}
              className="size-4.5 rounded-full"
              style={{ background: color.hex }}
            ></span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
