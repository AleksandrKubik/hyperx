import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import { LayoutContent } from "../components/LayoutContent";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "HypeX",
  description: "Boost your social media presence",
  keywords: "Twitter, X, Telegram, YouTube, growth, engagement, social media, marketing",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
      color: '#1DA1F2'
    }
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  other: {
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
