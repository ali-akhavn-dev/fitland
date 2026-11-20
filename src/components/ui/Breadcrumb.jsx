import { useEffect, useState } from "react";
import { Link } from "react-router";

import { ArrowLeft2 } from "iconsax-reactjs";

function Breadcrumb({ breadcrumb = [] }) {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    if (breadcrumb.length) {
      const routes = breadcrumb.reduce((acc, curr) => {
        acc[curr.level] = `${acc[curr.level - 1] ?? ""}/${curr.slug}`;
        return acc;
      }, []);

      setPaths(routes);
    }
  }, [breadcrumb]);

  return (
    breadcrumb.length > 1 && (
      <div className="flex-ic w-fit h-8 text-404040 select-none space-x-2 mt-10 hidden lg:flex-ic">
        {breadcrumb.map((item) => (
          <div className="flex-ic gap-2" key={item.id}>
            <Link
              to={`/category/${paths[item.level]}`}
              className={`${item.isCurrent ? "text-404040" : "text-adadad"}`}
              preventScrollReset
            >
              {item.title}
            </Link>
            {!item.isCurrent && <ArrowLeft2 color="#adadad" size={20} />}
          </div>
        ))}
      </div>
    )
  );
}

export default Breadcrumb;
