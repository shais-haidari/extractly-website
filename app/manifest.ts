import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Extractly — AI OCR Extension",
    short_name: "Extractly",
    description:
      "Extract and translate text from any image, video, or website using advanced AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#009689",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
