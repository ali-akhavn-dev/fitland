import { Link } from "react-router";

import { BASE_URL_IMAGE } from "@/constants";
import { formatPrice, getDiscountedPrice } from "@/utils/helper";

function ProductSliderCard({
  name,
  slug,
  price,
  discount,
  images,
  availableSizes,
  availableColors,
}) {
  const finalPrice = getDiscountedPrice(price, discount);

  return (
    <div className="relative rounded-medium overflow-hidden border border-ededed">
      <Link to={`/product/${slug}`}>
        <div className="bg-cbcbcb">
          <img
            src={`${BASE_URL_IMAGE}${images[0]}`}
            alt={slug}
            className="w-full max-h-[280px] object-contain"
          />
        </div>
      </Link>

      <div className="h-[187px] space-y-3 pt-4 px-4 bg-white">
        <Link to={`/product/${slug}`} className="inline-block">
          <h3 className="line-clamp-2 text-sm lg:text-base">{name}</h3>
        </Link>

        <div className="flex-ic gap-2 text-[10px] md:text-sm">
          <span>
            {discount > 0 ? formatPrice(finalPrice) : formatPrice(price)} تومان
          </span>
          {discount > 0 && (
            <span className="line-through text-868686">
              {formatPrice(price)}
            </span>
          )}
        </div>

        <span className="block h-4 text-[10px] md:text-xs">
          {availableSizes.length > 0 &&
            `از سایز ${availableSizes[0]} تا ${availableSizes[availableSizes.length - 1]}`}
        </span>

        <div id="colors" className="flex-ic relative w-min h-4.5 -space-x-1.25">
          {availableColors.map((color, index) => (
            <div
              key={index}
              style={{ background: color.hex }}
              className="size-4.5 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.2)]"
            ></div>
          ))}
        </div>
      </div>

      <div className="size-8 text-sm md:text-base md:size-10 flex-center absolute top-2 left-2 rounded-full bg-secondary-50">
        %{discount}
      </div>
    </div>
  );
}

export default ProductSliderCard;
