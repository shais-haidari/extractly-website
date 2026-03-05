"use client";

import { cn } from "@/utils/cn";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "./header";
import Logo from "./logo";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#") || window.location.pathname !== "/") return;

      const target = document.querySelector(href.slice(1));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 hidden w-full border-b transition-all duration-300 md:block",
        scrolled
          ? "border-border/50 bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionLinkClick(e, link.href)}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://chromewebstore.google.com/detail/lnfhnhfnlkjemkgdcppdlijpdjdmnnjd?utm_source=item-share-cb"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine text-accent-foreground inline-flex h-9 items-center rounded-lg bg-teal-600 px-4 text-sm font-medium transition-opacity hover:opacity-90"
        >
          Add to Chrome
        </a>
      </div>
    </header>
  );
}
