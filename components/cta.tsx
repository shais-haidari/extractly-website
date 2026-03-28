import Image from "next/image";
import braveIcon from "@/assets/brave-browser-icon.svg";
import chromeIcon from "@/assets/chrome_web_store.svg";
import edgeIcon from "@/assets/edge_browser.svg";
import operaIcon from "@/assets/opera-icon.svg";

export default function CTA() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-border bg-muted/30 relative isolate overflow-hidden rounded-3xl border px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Ready to extract like a pro?
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty">
              Install Extractly today and start extracting like a pro. Free, secure, and lightning-fast.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
          </div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r="512"
              cx="512"
              cy="512"
              fill="url(#cta-gradient)"
              fillOpacity="0.15"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#14b8a6" />
                <stop offset="1" stopColor="#0d9488" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
