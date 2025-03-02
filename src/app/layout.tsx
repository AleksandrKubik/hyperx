import { Inter } from "next/font/google"; // Import Inter font from Google
import "../app/globals.css"; // Import global CSS styles
import { LayoutContent } from "../components/LayoutContent"; // Import layout content component
import type { Metadata } from 'next'; // Import Metadata type from Next.js
import '@/styles/animations.css'; // Import animations CSS

// Configure Inter font with specific subsets and display options
const inter = Inter({
  subsets: ['latin', 'cyrillic'], // Include Latin and Cyrillic subsets
  display: 'swap', // Use swap font display
  variable: '--font-inter', // Define a CSS variable for the font
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "HypeX", // Page title
  description: "Boost your social media presence", // Page description
  keywords: "Twitter, X, Telegram, YouTube, growth, engagement, social media, marketing", // SEO keywords
  icons: {
    icon: '/favicon.svg', // Default favicon
    shortcut: '/favicon.svg', // Shortcut icon
    apple: '/favicon.svg', // Apple touch icon
    other: {
      rel: 'mask-icon', // Mask icon for Safari
      url: '/favicon.svg', // URL for the mask icon
      color: '#1DA1F2' // Color for the mask icon
    }
  },
  metadataBase: new URL('https://your-domain.com'), // Base URL for metadata
  alternates: {
    canonical: '/', // Canonical URL for the page
  },
  other: {
    'Cache-Control': 'public, max-age=31536000, immutable', // Cache control settings
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Define children prop as React nodes
}) {
  return (
    <html lang="en" className={`${inter.variable}`}> {/* Set language and font variable */}
      <head>
        <meta charSet="utf-8" /> {/* Character set for the document */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Responsive viewport settings */}
      </head>
      <body className={`${inter.className} font-sans antialiased`} suppressHydrationWarning>
        <LayoutContent>{children}</LayoutContent> {/* Render layout content with children */}
      </body>
    </html>
  );
}