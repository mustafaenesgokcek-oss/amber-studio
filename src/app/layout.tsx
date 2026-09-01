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
  title: "Amber Studio — Practical AI Workflows for Small Agencies",
  description:
    "Amber Studio helps small agencies turn scattered AI usage into clear, repeatable workflows across content, reporting, client intake, follow-up, and operations.",
  openGraph: {
    title: "Amber Studio — Practical AI Workflows for Small Agencies",
    description:
      "Practical AI workflows for small teams. Book a free 20-minute AI workflow review.",
    type: "website",
    url: "https://amberstudio.ai",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
