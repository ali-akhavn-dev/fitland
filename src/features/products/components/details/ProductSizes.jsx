function ProductSizes({ availableSizes }) {
  return (
    availableSizes?.length > 0 && (
      <div className="w-65 flex flex-col gap-2 text-neutral-black">
        <div className="flex items-center gap-1">
          <span className="font-IRANSansX-DemiBold lg:font-IRANSansX-Medium text-[18px] lg:text-2xl">
            سایز
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {availableSizes.map((size) => {
            return (
              <span
                key={size}
                className="w-19.5 h-6 flex-center rounded-sm bg-ededed text-xs transition-colors"
              >
                {size}
              </span>
            );
          })}
        </div>
      </div>
    )
  );
}

export default ProductSizes;
