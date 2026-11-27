function ProductColors({ availableColors }) {
  return (
    availableColors?.length > 0 && (
      <div className="flex w-full flex-col gap-2">
        <span className="font-IRANSansX-DemiBold lg:font-IRANSansX-Medium text-[18px] lg:text-2xl text-neutral-black">
          رنگ
        </span>

        <div className="flex items-center gap-4">
          {availableColors.map((color) => {
            return (
              <div
                key={color.slug}
                className="flex-ic gap-1 py-1 px-1.5 rounded-sm transition-colors"
              >
                <span
                  style={{ background: color.hex }}
                  className="size-6 rounded-full border border-adadad"
                />
                <span className="text-xs text-404040">{color.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default ProductColors;
