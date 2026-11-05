import { Link } from "react-router";

import {
  ArrowLeft2,
  Award,
  CloseSquare,
  Flash,
  Home2,
  Star1,
  User,
} from "iconsax-reactjs";

import Logo from "../../../../public/svg/app-logo.svg";
import NavmenuItem from "./NavmenuItem";
import menus from "@/constants/navmenu";

function Navmenu({ onToggle, isOpen }) {
  return (
    <div className="lg:hidden text-neutral-black">
      <div
        className={`w-[256px] fixed top-0 bottom-0 right-0 z-50 ${isOpen ? "" : "translate-x-full"} transition-all bg-white py-3 px-4`}
      >
        <header className="flex flex-col gap-10 border-b border-cbcbcb pb-7">
          <div className="w-full flex-between">
            <Link to="/">
              <img className="w-28" src={Logo} alt="logo" />
              <span className="text-[10px] text-868686 mt-2 select-none">
                فروشگاه لوازم ورزشی فیت‌لند
              </span>
            </Link>
            <button onClick={onToggle}>
              <CloseSquare />
            </button>
          </div>

          <Link to="/auth" className="flex-between">
            <div className="flex-ic gap-3">
              <span className="bg-ededed flex-center size-12 rounded-full">
                <User />
              </span>
            </div>

            <ArrowLeft2 size={20} />
          </Link>
        </header>

        <main className="pt-5">
          <ul className="space-y-4 select-none">
            <li>
              <Link
                to="/"
                className="flex-ic gap-2.5 p-2 rounded-small transition-colors"
              >
                <Home2 />
                خانه
              </Link>
            </li>
            {menus.map((menu) => (
              <NavmenuItem key={menu.id} {...menu} />
            ))}
            <li onClick={onToggle}>
              <Link
                to="/products?sort=newest"
                className="flex-ic gap-2.5 p-2 rounded-small transition-colors"
              >
                <Star1 />
                جدیدترین محصولات
              </Link>
            </li>
            <li onClick={onToggle}>
              <Link
                to="/products?sort=bestSelling"
                className="flex-ic gap-2.5 p-2 rounded-small transition-colors"
              >
                <Award />
                پرفروش‌ترین محصولات
              </Link>
            </li>
            <li onClick={onToggle}>
              <Link
                to="/products/?hasDiscount=true"
                className="flex-ic gap-2.5 p-2 rounded-small transition-colors"
              >
                <Flash />
                تخفیفات ویژه
              </Link>
            </li>
          </ul>
        </main>
      </div>

      <div
        onClick={onToggle}
        id="overlay"
        className={`fixed inset-0 z-10 ${!isOpen ? "invisible opacity-0" : ""} transition-all backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)]`}
      ></div>
    </div>
  );
}

export default Navmenu;
