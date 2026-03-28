import { cn } from "@/utils/cn";
import type { LucideIcon } from "lucide-react";
import { Camera, Globe, Zap, Video, ShieldCheck } from "lucide-react";
import SectionLabel from "./section-label";

interface ShowcaseItem {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function LargeCard({
  item,
  className,
}: {
  item: ShowcaseItem;
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group card-shine border-border card-shine bg-muted/30 hover:bg-muted/60 flex flex-col overflow-hidden rounded-lg border transition-colors",
        className,
      )}
    >
      <div className="p-8">
        <div className="bg-accent/10 text-accent flex h-10 w-10 items-center justify-center rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function SmallCard({
  item,
  className,
}: {
  item: ShowcaseItem;
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group card-shine border-border card-shine bg-muted/30 hover:bg-muted/60 flex flex-col overflow-hidden rounded-lg border transition-colors",
        className,
      )}
    >
      <div className="p-8">
        <div className="bg-accent/10 text-accent flex h-10 w-10 items-center justify-center rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          label="Features"
          heading="Everything you need to extract and translate text"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <LargeCard
            item={{
              id: "ocr",
              label: "AI OCR",
              icon: Camera,
              title: "Advanced AI OCR",
              description:
                "Powered by neural-network technology (Tesseract.js and LSTM) to recognize text with incredible accuracy from any image or video.",
            }}
            className="rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-lg"
          />

          <LargeCard
            item={{
              id: "translate",
              label: "Translation",
              icon: Globe,
              title: "Instant Translation",
              description:
                "Translate extracted text into around 100 languages instantly using built-in Chrome AI.",
            }}
            className="md:rounded-tr-3xl"
          />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <SmallCard
            item={{
              id: "fast",
              label: "Speed",
              icon: Zap,
              title: "Lightning Fast",
              description:
                "Persistent engine technology means extractions happen in seconds, saving you valuable time.",
            }}
            className="lg:rounded-bl-3xl"
          />
          <SmallCard
            item={{
              id: "video",
              label: "Video & Restricted Sites",
              icon: Video,
              title: "Works Where Others Fail",
              description:
                "Grab subtitles, lyrics, or notes directly from YouTube videos. Bypasses CSP restrictions on sites like Instagram and LinkedIn.",
            }}
          />
          <SmallCard
            item={{
              id: "privacy",
              label: "Privacy & History",
              icon: ShieldCheck,
              title: "Privacy First",
              description:
                "All processing happens locally in your browser. Plus, keep track of your previous extractions with a built-in history log.",
            }}
            className="rounded-b-3xl lg:rounded-br-3xl lg:rounded-bl-lg"
          />
        </div>
      </div>
    </section>
  );
}
