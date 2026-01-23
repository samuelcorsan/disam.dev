import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://disam.dev'),
  title: "Samuel Corsan | 15-year-old full stack developer",
  description:
    "15-year-old full-stack developer from Spain building AI, web, and infrastructure projects. Passionate about startups, learning fast, and creating companies that matter",
  openGraph: {
    title: "Samuel Corsan | 15-year-old full stack developer",
    description:
      "15-year-old full-stack developer from Spain building AI, web, and infrastructure projects. Passionate about startups, learning fast, and creating companies that matter",
    type: "website",
    url: "/",
    siteName: "Samuel Corsan",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Samuel Corsan | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Corsan | 15-year-old full stack developer",
    description:
      "15-year-old full-stack developer from Spain building AI, web, and infrastructure projects. Passionate about startups, learning fast, and creating companies that matter",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
