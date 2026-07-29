import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "Pranav Shetty",
  description: "Pranav Shetty — Limitless. Bengaluru, India.",
  openGraph: {
    title: "Pranav Shetty",
    description: "Limitless. Bengaluru, India.",
    images: [{ url: "/og.png", width: 1536, height: 804, alt: "Pranav Shetty — Limitless. Bengaluru, India." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Shetty",
    description: "Limitless. Bengaluru, India.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
