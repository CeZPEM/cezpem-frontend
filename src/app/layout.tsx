import "./globals.css";
import type { Metadata } from "next";

import { Petrona, Open_Sans, Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const petrona = Petrona({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-petrona",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-openSans",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-archivo",
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
    <html
      lang="en"
      className={`${petrona.variable} ${petrona.className} ${openSans.variable} ${archivo.variable}`}
    >
      <body className="font-petrona antialiased">
        <div className="w-full min-h-screen">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
