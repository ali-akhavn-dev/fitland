import { useState } from "react";

function Loadmore({
  children,
  title,
  overlayHeight = 48,
  overlayColor = "rgba(0, 21, 38)",
  textColor = "#ededed",
  customClass = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLoadmore = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={customClass}>
      <div className="relative" style={{ color: textColor }}>
        <span className="font-IRANSansX-Medium text-sm">{title}</span>
        <p
          className={`mt-4 font-IRANSansX-Light text-xs leading-5.5 ${!isOpen ? "h-14" : ""} overflow-hidden`}
        >
          {children}
        </p>
        <div
          id="transparent"
          style={{
            height: overlayHeight,
            background: `linear-gradient(0deg, ${overlayColor} 0%, transparent 100%)`,
          }}
          className={`${isOpen ? "invisible opacity-0" : ""} absolute bottom-0 w-full bg-linear-[0deg,rgb(2,21,38)_0%,transparent_100%]`}
        ></div>
      </div>
      <button
        onClick={toggleLoadmore}
        className="mt-4 text-sm font-IRANSansX-Medium text-adadad underline"
      >
        {isOpen ? "بستن" : " مشاهده بیشتر..."}
      </button>
    </div>
  );
}

export default Loadmore;
