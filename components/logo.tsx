"use client";

import icon from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="group flex items-center gap-2 text-lg font-bold tracking-tight"
    >
      <Image
        src={icon}
        alt="Extractly"
        width={28}
        height={28}
        className="rounded-lg"
      />
      <span className="font-heading">
        Extract<span className="text-accent">ly</span>
      </span>
    </Link>
  );
}
