import SectionLabel from "./section-label";

const faqs = [
  {
    question: "Is Extractly free?",
    answer:
      "Yes, Extractly comes fully free. Unlike other extensions that fail on complex sites and lock features behind premium tiers, we provide a premium experience at no cost.",
  },
  {
    question: "Does it work on YouTube and restricted sites?",
    answer:
      "Yes! Extractly uses a specialized architecture to bypass CSP restrictions, making it work perfectly on sites like YouTube, Instagram, and LinkedIn.",
  },
  {
    question: "Is my data sent anywhere?",
    answer:
      "No. Privacy First: All processing happens locally in your browser. Your data never leaves your device.",
  },
  {
    question: "How fast is the text extraction?",
    answer:
      "Lightning Fast: Persistent engine technology means extractions happen in seconds, allowing you to instantly copy or translate the text.",
  },
  {
    question: "How does the instant translation work?",
    answer:
      "After extracting text, you can translate it into around 100 languages instantly using built-in Chrome AI.",
  },
  {
    question: "Can I see my past extractions?",
    answer:
      "Absolutely. Extractly includes a built-in history management feature so you can keep track of your previous extractions.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="FAQ" heading="Frequently asked questions" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold tracking-tight">
                {faq.question}
              </h3>
              <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
