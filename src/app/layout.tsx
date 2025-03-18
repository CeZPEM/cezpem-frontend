import "./globals.css";
import type { Metadata, Viewport } from "next";

import { Petrona, Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";

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

const siteTitle = "CeZPEM - Centro Zoia Prestes de Educação Multidisciplinar";
const siteDescription =
  "O CeZPEM é um centro de educação popular que oferece cursos acessíveis e formação política para estudantes e professores, promovendo a organização da classe docente e o acesso ao ensino de qualidade.";

export const viewport: Viewport = {
  themeColor: "#D81843",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  userScalable: true,
  interactiveWidget: "resizes-visual",
};

const BASE_URL = isDevEnvironment
  ? "https://dev.cezpem.com.br"
  : "https://cezpem.com.br";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://cezpem.com.br"),
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
    url: BASE_URL,
    siteName: "CeZPEM",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/cezpem-og-512.png",
        width: 512,
        height: 512,
        alt: "CeZPEM - Educação Popular e Multidisciplinar",
      },
      {
        url: "/cezpem-og-192.png",
        width: 192,
        height: 192,
        alt: "CeZPEM - Educação Popular e Multidisciplinar",
      },
      {
        url: "/cezpem-og-128.png",
        width: 128,
        height: 128,
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
    <html lang="pt-BR" className={`${petrona.variable} ${archivo.variable}`}>
      <body className="font-petrona antialiased">
        <div className="w-full min-h-screen">
          <Header />

          {children}

          <Footer />
        </div>
      </body>

      <GoogleAnalyticsWrapper />
    </html>
  );
}
