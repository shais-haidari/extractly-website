"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import SectionLabel from "./section-label";

const testimonials = [
  {
    name: "Sohail Badghisi",
    quote:
      "Very useful extension. Easy to use and works perfectly. I recommend it to anyone who needs this.",
  },
  {
    name: "Shoaib Haidari",
    quote:
      "It works really awesome, it is a great tool I recommend it to everyone.",
  },
  {
    name: "Syniz",
    quote: "Great extension easy to use.",
  },
  {
    name: "Ehsan Hadid",
    quote: "Such a great and handy tool",
  },
  {
    name: "Sayed Ashraf Arefi",
    quote: "Amazing tool! Saves a lot of time when copying text from images.",
  },
  {
    name: "Rafi Haidari",
    quote:
      "This extension is developed by my son Shais Haidari he is 13 y.o. Nice job buddy keep it up.",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="border-border bg-muted/30 mx-3 w-80 shrink-0 rounded-xl border p-5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="text-muted-foreground mt-3 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <p className="mt-3 text-xs font-medium">{testimonial.name}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-14 md:py-20"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Testimonials" heading="Loved by developers" />
      </div>

      <div className="mt-16 space-y-6">
        <Marquee
          speed={40}
          pauseOnHover
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>

        <Marquee
          speed={40}
          pauseOnHover
          direction="right"
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
        >
          {[...testimonials].reverse().map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
