import "./globals.css";

import type { Metadata } from "next";

import { Petrona, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const petrona = Petrona({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
});

export const metadata: Metadata = {
  title: "CeZPEM",
  description: "Centro Zoia Prestes de Educação Multidisciplinar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${petrona.className} ${openSans.className} antialiased`}
      >
        <div className="w-full min-h-screen">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
