import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Extractly browser extension.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-16">
        <article className="prose prose-base prose-zinc dark:prose-invert max-w-none">
          <h1 className="mb-0">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Last updated: March 28, 2026
          </p>

          <h2>Overview</h2>
          <p>
            Extractly is a browser extension designed for lightning-fast AI OCR and text extraction. We are committed to protecting your privacy. This policy explains what data the extension accesses and how it is handled.
          </p>

          <h2>Data Collection</h2>
          <p>
            <strong>
              Extractly does not collect, transmit, or store any personal data.
            </strong>{" "}
            All processing, including OCR and text extraction, happens entirely locally within your browser. Your data never leaves your device.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Extractly uses Chrome's built-in AI for translation features, but does not integrate with any external third-party analytics platforms.
          </p>

          <h2>Permissions</h2>
          <p>
            The extension requests only the minimum permissions required to function:
          </p>
          <ul>
            <li>
              <strong>activeTab</strong>: Allows the extension to capture a screenshot of the current page for text extraction when the user triggers the tool.
            </li>
            <li>
              <strong>storage</strong>: Used to save user preferences (dark mode, language settings) and maintain a local history of your extracted texts.
            </li>
            <li>
              <strong>offscreen</strong>: Required to run the OCR engine (Tesseract.js) in a separate environment that supports Web Workers and bypasses site security restrictions (CSP).
            </li>
            <li>
              <strong>host permissions</strong>: Necessary to inject the selection tool and the Extractly interface on all websites so you can extract text from any page.
            </li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            If this privacy policy is updated, the changes will be reflected on this page with an updated date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us at <a href="mailto:haidari.shais@gmail.com">haidari.shais@gmail.com</a>.
          </p>
        </article>
      </main>
    </>
  );
}
