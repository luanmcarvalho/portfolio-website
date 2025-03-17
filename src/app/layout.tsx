import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luan Carvalho | Frontend Developer & Motion Designer",
  description: "Frontend Developer & Motion Designer creating immersive digital experiences for brands and businesses.",
  keywords: ["frontend developer", "motion designer", "React", "Next.js", "animation", "portfolio", "web development", "UI/UX", "interactive design", "creative developer"],
  creator: "Luan Carvalho",
  authors: [{ name: "Luan Carvalho", url: "https://luanmcarvalho.com" }],
  publisher: "Luan Carvalho",
  metadataBase: new URL("https://luanmcarvalho.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': "/en-US",
      'pt-BR': "/pt-BR",
    },
  },
  openGraph: {
    title: "Luan Carvalho | Frontend Developer & Motion Designer",
    description: "Portfolio of Luan Carvalho, a frontend developer and motion designer with 7+ years of experience creating visually stunning, interactive experiences.",
    url: "https://luanmcarvalho.com",
    siteName: "Luan Carvalho Portfolio",
    images: [
      {
        url: "/images/export.png",
        width: 1200,
        height: 630,
        alt: "Luan Carvalho - Frontend Developer & Motion Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "grammarly-disable-extension": "true",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: [
      { url: '/images/HoverIcon2.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/HoverIcon2.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="grammarly-disable-extension" content="true" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/images/HoverIcon2.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Add structured data for improved SEO */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Luan Carvalho",
              "url": "https://luanmcarvalho.com",
              "image": "https://luanmcarvalho.com/images/about-image.png",
              "jobTitle": "Frontend Developer & Motion Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "Hover Studio",
                "url": "https://www.hoverstudio.tv"
              },
              "sameAs": [
                "https://www.linkedin.com/in/luanmcarvalho/",
                "https://vimeo.com/hoverstudio",
                "https://github.com/luanmcarvalho"
              ],
              "description": "Frontend Developer and Motion Designer with 7+ years of experience creating visually stunning, interactive experiences."
            })
          }}
        />
      </body>
    </html>
  );
}
