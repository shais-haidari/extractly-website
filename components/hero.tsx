import Image from "next/image";
import Link from "next/link";

import { Star } from "lucide-react";

import heroImage from "@/assets/screenshots/hero.png";
import braveIcon from "@/assets/brave-browser-icon.svg";
import chromeIcon from "@/assets/chrome_web_store.svg";
import edgeIcon from "@/assets/edge_browser.svg";
import operaIcon from "@/assets/opera-icon.svg";

export default function Hero() {
  return (
    <section className="relative py-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-orb-1 bg-accent/5 absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl" />
        <div className="animate-orb-2 bg-accent/5 absolute -top-20 right-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="animate-orb-3 bg-accent/5 absolute top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <a
          href="https://chromewebstore.google.com/detail/extractly-ai-extract-text/knhdipahdipkhpfjadkibpphgafglcpb"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-pill bg-background group inline-flex flex-col items-center gap-1 rounded-full px-8 py-2.5 text-sm"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="font-medium text-white">5.0</span>
          </span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
            On the Chrome Web Store
          </span>
        </a>

        <h1 className="mx-auto mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl md:leading-[1.15]">
          The Ultimate AI-Powered Companion for{" "}
          <span className="text-accent">Extracting Text</span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          Stop typing manually! Extractly turns visual content into editable text and translates it in over 100 languages instantly. Works on images, videos, and restricted sites.
        </p>


        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { browser: "Chrome", icon: chromeIcon },
            { browser: "Brave", icon: braveIcon },
            { browser: "Opera", icon: operaIcon },
            { browser: "Edge", icon: edgeIcon },
          ].map((item) => (
            <a
              key={item.browser}
              href="https://chromewebstore.google.com/detail/extractly-ai-extract-text/knhdipahdipkhpfjadkibpphgafglcpb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-background px-4 py-2 shadow-sm transition-transform hover:-translate-y-0.5 dark:border dark:border-border"
            >
              <Image
                src={item.icon}
                alt={`${item.browser} icon`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="text-left">
                <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
                  Available for
                </div>
                <div className="text-sm font-semibold leading-tight text-foreground">
                  {item.browser}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <div className="border-border bg-muted/50 mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl">
            <Image
              src={heroImage}
              alt="Extractly Chrome extension UI"
              width={1560}
              height={1160}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
