import { useState } from "react";
import { Link } from "react-router";

import Logo from "../../../../public/svg/app-logo.svg";
import HamburgerMenu from "../../../../public/svg/menu.svg";
import ProfileButton from "@/features/auth/components/ProfileButton";
import CartButton from "@/features/cart/components/CartButton";
import ProductSearchBox from "@/features/search/components/ProductSearchBox";
import Navmenu from "./Navmenu";
import Navbar from "./Navbar";

function Header() {
  const [isNavmenuOpen, setIsNavmenuOpen] = useState(false);

  const toggleNavmenu = () => {
    setIsNavmenuOpen((prevState) => !prevState);
  };

  return (
    <header id="header" className="mt-9 md:mt-10">
      <div className="container">
        <div className="flex-between flex-wrap lg:flex-nowrap">
          <button onClick={toggleNavmenu} className="lg:hidden size-6.5">
            <img src={HamburgerMenu} alt="menu" />
          </button>

          <div>
            <Link to="/">
              <img className="w-27 lg:w-27 xl:w-full" src={Logo} alt="logo" />
            </Link>
            <span className="hidden xl:block font-IRANSansX-Bold text-xs text-868686 mt-2 select-none">
              فروشگاه لوازم ورزشی فیت‌لند
            </span>
          </div>

          <div className="flex-ic gap-2 lg:gap-4 lg:order-1">
            <ProfileButton />
            <CartButton />
          </div>

          <ProductSearchBox />
        </div>

        <Navmenu onToggle={toggleNavmenu} isOpen={isNavmenuOpen} />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
