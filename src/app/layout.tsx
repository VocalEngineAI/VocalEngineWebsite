import type { Metadata } from "next";
import { Geist, Inter, Reddit_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const redditMono = Reddit_Mono({
  variable: "--font-reddit-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VocalEngineAI — Apps, Websites & AI Voice Agents",
  description:
    "VocalEngineAI builds mobile apps, websites, AI automations, and voice & chat agents that plug straight into the tools your business already runs on.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${redditMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink font-body">{children}</body>
    </html>
  );
}
