import type { MenuItem } from "./navType";

// Home - Sirf 1 Home Page
export const homeList: MenuItem[] = [
  { id: 1, text: "Home", url: "/" },
]

// Pages - Sirf About aur Contact (jo 5 pages mein hain)
export const pagesList: MenuItem[] = [
  { id: 1, text: "About Us", url: "/about" },
  { id: 2, text: "Contact Us", url: "/contact" },
];

// Services - Sirf Services Page
export const servicesList: MenuItem[] = [
  { id: 1, text: "Services", url: "/services" },
];

// Products - Sirf Products Page
export const shopList: MenuItem[] = [
  { id: 1, text: "Products", url: "/products" },
];

// Blog - Hata Diya (Blog nahi hai)
export const blogList: MenuItem[] = [];