import { Link } from "react-router";

import banner1 from "@/assets/images/banner/sports-equipment.jpg";
import banner2 from "@/assets/images/banner/bike.jpg";
import banner3 from "@/assets/images/banner/camping.jpg";

function Banner({ children, bannerName, to, customClass = "" }) {
  const banners = {
    "sports-equipment": banner1,
    bike: banner2,
    camping: banner3,
  };

  const bannerStyle = {
    backgroundImage: `url(${banners[bannerName]})`,
  };

  return (
    <Link
      to={to}
      style={bannerStyle}
      className={`block h-53.75 sm:h-66.25 md:h-91.25 lg:h-[485px] xl:h-150 relative bg-no-repeat bg-center bg-cover mt-8 md:mt-15 lg:mt-20 ${customClass}`}
    >
      {children}
    </Link>
  );
}

export default Banner;
