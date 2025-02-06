import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ahmad Isyraf",
  description: "Software Enginner Based in Pahang, Malaysia",
  openGraph: {
    title: "Ahmad Isyraf",
    description: "Software Enginner Based in Pahang, Malaysia",
    url: "https://isyraf.vercel.app",
    siteName: "Isyraf's website",
    // images: "/logo.svg",
  },
  twitter: {
    title: "Ahmad Isyraf",
    description: "Software Enginner Based in Pahang, Malaysia",
    // images: "/logo-optimized-for-twitter-og.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
