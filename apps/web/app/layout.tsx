import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"

const myFontOne = localFont({src : "../public/fonts/jakarta.ttf"})

export const metadata: Metadata = {
  title: "Teach AI",
  description: "an ai saas product that will help teachers to create lesson plans, lesson summary on the basis of ncert guidelines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFontOne.className} bg-blue-200`}>{children}</body>
    </html>
  );
}
