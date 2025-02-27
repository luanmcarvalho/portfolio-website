import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Portfolio of Luan Carvalho, a frontend developer and motion designer with 7+ years of experience creating visually stunning, interactive experiences.",
  keywords: ["frontend developer", "motion designer", "React", "Next.js", "animation", "portfolio", "web development"],
  creator: "Luan Carvalho",
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
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "grammarly-disable-extension": "true"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
