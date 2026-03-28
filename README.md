# Extractly Website
The marketing website for [Extractly](https://chromewebstore.google.com/detail/extractly-ai-extract-text/knhdipahdipkhpfjadkibpphgafglcpb), an AI OCR and text extraction Chrome extension.

## Tech Stack

- [Next.js](https://nextjs.org) 16
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Serve production build
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

## Project Structure

```
app/
├── privacy/          # Privacy policy page
├── globals.css       # Global styles and animations
├── layout.tsx        # Root layout with shared header
└── page.tsx          # Home page
components/           # Reusable UI components
assets/               # Static assets (logo, icons)
config/               # App configuration (fonts, etc.)
utils/                # Utility functions (cn, etc.)
```

## License

[GPL-3.0](LICENSE)
