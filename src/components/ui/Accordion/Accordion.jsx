import { useState } from "react";

import { ArrowDown2 } from "iconsax-reactjs";

function Accordion({
  title,
  Icon = <ArrowDown2 />,
  headerClass = "",
  bodyClass = "",
  hasSeparator,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${!isOpen && hasSeparator ? "border-b border-secondary-400" : ""}`}
    >
      <div
        id="header"
        className={`flex-between text-white border-secondary-400 cursor-pointer ${headerClass}`}
        onClick={toggleAccordion}
      >
        <span className="font-IRANSansX-Medium select-none">{title}</span>
        <div className={`${isOpen ? "rotate-180" : ""} transition-all`}>
          {Icon}
        </div>
      </div>

      {isOpen && (
        <div id="body" className={`${bodyClass}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
