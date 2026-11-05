const menus = [
  { id: 1, label: "خانه", icon: "home", href: "/", submenus: null },
  {
    id: 2,
    label: "دسته‌بندی ها",
    icon: "shop",
    href: null,
    submenus: [
      { id: 1, label: "لباس مردانه", href: "men" },
      { id: 2, label: "لباس زنانه", href: "women" },
      { id: 3, label: "لباس بچگانه", href: "children" },
      { id: 4, label: "لوازم ورزشی", href: "sports-equipments" },
      { id: 5, label: "شیکر و چاگ", href: "shaker" },
    ],
  },
  {
    id: 3,
    label: "جدیدترین محصولات",
    icon: "star",
    href: "/products?sort=newest",
    submenus: null,
  },
  {
    id: 4,
    label: "پرفروش ترین محصولات",
    icon: "award",
    href: "/products?sort=bestSelling",
    submenus: null,
  },
  {
    id: 5,
    label: "تخفیفات ویژه",
    icon: "flash",
    href: "/products?hasDiscount=true",
    submenus: null,
  },
];

export default menus;
