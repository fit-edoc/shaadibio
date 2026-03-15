import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const love = localFont({
  src: "../../public/love.otf",
  variable: "--font-love",
});

export const metadata: Metadata = {
  title: "ShaadBio - Create Your Biodata",
  description: "Create a professional marriage biodata in minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${love.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
