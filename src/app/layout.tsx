import "./globals.css";
import type { Metadata } from "next";

import { Petrona, Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const petrona = Petrona({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-petrona",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  preload: true,
  variable: "--font-archivo",
});

const isDevEnvironment = process.env.NEXT_PUBLIC_ENVIRONMENT === "development";

const siteTitle =
  "CeZPEM - Educação Popular e Multidisciplinar com Consciência de Classe";
const siteDescription =
  "O CeZPEM é um centro de educação popular que oferece cursos acessíveis e formação política para estudantes e professores, promovendo a organização da classe docente e o acesso ao ensino de qualidade.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "CeZPEM",
    "Centro Zoia Prestes",
    "educação multidisciplinar",
    "educação popular",
    "ensino acessível",
    "cursinho pré-vestibular",
    "ENEM",
    "formação política",
    "aulas online",
    "educação crítica",
    "conscientização de classe",
    "professores organizados",
    "socialismo e educação",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  creator: "Soberana TV",
  robots: {
    "max-image-preview": "large",
    index: !isDevEnvironment,
    follow: !isDevEnvironment,
    nocache: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    url: "https://cezpem.com.br",
    siteName: "CeZPEM",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/cezpem-cover.jpg",
        width: 1920,
        height: 1080,
        alt: "CeZPEM - Educação Popular e Multidisciplinar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${petrona.variable} ${archivo.variable}`}>
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
