export const siteConfig = {
  name: "Stackmorphic",
  tagline: "Full-Stack Web Development & Modern Websites",
  description:
    "Stackmorphic builds modern, responsive websites and full-stack web applications for businesses in Madhyamgram, Kolkata and beyond.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.stackmorphic.com",
  phone: "+91 9330492466",
  phoneHref: "tel:+919330492466",
  whatsappHref:
    "https://wa.me/919330492466?text=Hello%20Stackmorphic%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.",
  address:
    "Badu Rd, Sreenagar, Madhyamgram, Kolkata, West Bengal 700129, India",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = navItems;
