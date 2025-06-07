import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Samuel Corsan (disamdev)",
  description:
    "I'm Samuel Corsan or disamdev, a 15 y/o full-stack dev & high school student building web apps.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Samuel Corsan (disamdev)",
    description:
      "I'm Samuel Corsan or disamdev, a 15 y/o full-stack dev & high school student building web apps.",
    url: "https://disam.dev",
    siteName: "Samuel Corsan",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Samuel Corsan (disamdev)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Corsan (disamdev)",
    description:
      "I'm Samuel Corsan or disamdev, a 15 y/o full-stack dev & high school student building web apps.",
    images: ["/og.png"],
    creator: "@disamdev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head>
        <script
          src="https://cdn.peasy.so/peasy.js"
          data-website-id="01jx2s3947f04bbsng1162k88k"
          async
        ></script>
      </head>
      <body className="text-body bg-[#0A0A0A] selection:bg-primary selection:text-hoverColor mx-auto my-8 max-w-[400px] px-4 md:my-16 md:max-w-[600px]">
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
