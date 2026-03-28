import { geistSans, spaceGrotesk } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";

import ThemeProvider from "@/components/providers/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — Extractly",
  },
  description: siteConfig.description,
  keywords: [
    "chrome extension",
    "text extraction",
    "ocr",
    "image to text",
    "video text extraction",
    "youtube subtitles",
    "translation",
    "ai tools",
    "productivity",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(geistSans.variable, spaceGrotesk.variable, "antialiased")}
      >
        {process.env.NODE_ENV === "production" &&
          process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID && (
            <GoogleAnalytics
              gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}
            />
          )}

        <ThemeProvider>
          <div className="bg-background overflow-x-hidden rounded-t-4xl md:rounded-t-none">
            <Header />
            {children}

            <BackToTop />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
