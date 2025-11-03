import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans"
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "900"],  // Outfit supports 900!
  variable: "--font-dt-getai",
});

export const metadata: Metadata = {
  title: "Ibom Blockchain Summit",
  description: "West Africa's Largest Blockchain Gathering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}