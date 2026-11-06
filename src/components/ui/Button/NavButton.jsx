import { Link } from "react-router";

function NavButton({
  children,
  className,
  text = "مشاهده همه محصولات",
  to = "/products",
  dir = "rtl",
}) {
  return (
    <Link
      dir={dir}
      className={`btn h-8 lg:h-12 rounded-small gap-2 xl:font-IRANSansX-Bold text-xs lg:text-base text-white transition-colors ${className}`}
      to={to}
    >
      {children}
      {text}
    </Link>
  );
}

export default NavButton;
