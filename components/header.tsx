import DesktopHeader from "./headers/desktop";
import MobileHeader from "./headers/mobile";

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "mailto:info@hassib.co" },
];

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
