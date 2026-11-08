import Spinner from "../Icon/Spinner";

function Button({
  children,
  className = "",
  textClassName = "",
  onClick,
  text,
  type = "button",
  pending,
  dir = "rtl",
}) {
  return (
    <button
      dir={dir}
      disabled={pending}
      type={type}
      onClick={onClick}
      className={`btn w-full gap-2 rounded-small font-IRANSansX-Medium bg-primary active:scale-99 transition-all ${className}`}
    >
      {children}
      <span className={textClassName}>
        {pending ? <Spinner size={24} /> : text}
      </span>
    </button>
  );
}

export default Button;
