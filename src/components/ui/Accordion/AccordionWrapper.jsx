function AccordionWrapper({ children, customClass = "" }) {
  return <div className={`overflow-hidden ${customClass}`}>{children}</div>;
}

export default AccordionWrapper;
