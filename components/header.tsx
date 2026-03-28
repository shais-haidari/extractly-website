import DesktopHeader from "./header-desktop";
import MobileHeader from "./header-mobile";

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "mailto:haidari.shais@gmail.com" },
];

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
