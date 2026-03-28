export const releases: Record<
  string,
  { tagline: string; content: React.ReactNode }
> = {
  "1.0.0": {
    tagline: "The first release of Extractly",
    content: (
      <>
        <h3>Features</h3>
        <ul>
          <li>
            <strong>Advanced AI OCR:</strong> Powered by Tesseract.js and LSTM for incredible accuracy.
          </li>
          <li>
            <strong>Instant Translation:</strong> Translate text to over 100 languages instantly.
          </li>
          <li>
            <strong>Lightning Fast:</strong> Persistent engine technology for sub-second extractions.
          </li>
          <li>
            <strong>Works Where Others Fail:</strong> Bypasses CSP restrictions to extract from YouTube, Instagram, and LinkedIn.
          </li>
          <li>
            <strong>Privacy First:</strong> Everything runs locally in your browser.
          </li>
          <li>
            <strong>History Management:</strong> Track and manage all your past extractions.
          </li>
        </ul>
      </>
    ),
  },
};
