"use client";

import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { navLinks } from "./header";
import Logo from "./logo";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

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
    <>
      <header className="relative z-50 w-full border-b border-transparent md:hidden">
        <div className="flex h-16 items-center justify-between px-6">
          <Logo />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-in-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setOpen(false);
                    handleSectionLinkClick(e, link.href);
                  }}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://chromewebstore.google.com/detail/lnfhnhfnlkjemkgdcppdlijpdjdmnnjd?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine bg-accent text-accent-foreground inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Add to Chrome
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
