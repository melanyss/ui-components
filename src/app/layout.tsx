import type { Metadata } from "next";
import { Karla } from 'next/font/google';
import "../styles/globals.css";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast';
import Hero from "../components/Hero";
import EndMsg from "../components/EndMsg";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '../components/GoogleTagManager';

const gtmId = process.env.GTM_ID || '';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Open Source UI Components by Melanys",
  description: "An open-source collection of web design components and interactive elements, built with Next.js, TypeScript, and Tailwind CSS.",
  applicationName: "Open Source UI Components by Melanys",
  metadataBase: new URL('https://ui.melanys.me'),
  creator: "Melanys Figueredo",
  publisher: "Melanys Figueredo",
  authors: [{ name: "Melanys Figueredo", url: "https://melanys.me" }],
  keywords: ["UI components", "Melanys Figueredo", "Melanys Figueredo Toledano", "Melanys Figueredo open source", "Melanys Figueredo Toledano open source", "Melanys Figueredo Toledano web design", "Melanys Figueredo Toledano web design open source", "Next.js", "TypeScript", "Tailwind CSS", "Open source", "Web design"],
  openGraph: {
    title: "Open Source UI Components by Melanys",
    description: "Explore and copy web design components and interactive elements built with modern web technologies.",
    url: "https://ui.melanys.me/",
    siteName: "Open Source UI Components by Melanys",
    images: [
      {
        url: "/assets/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "UI Components by Melanys",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source UI Components by Melanys",
    description: "An open-source collection of web design components and interactive elements.",
    images: ["/assets/thumbnail.jpg"],
    creator: "@melanysft",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://ui.melanys.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManagerScript gtmId={gtmId} />
      <body className={`${karla.variable} font-sans antialiased flex flex-col min-h-screen`}>
      <GoogleTagManagerNoScript gtmId={gtmId} />
        <main className="flex-grow">
          <Hero />
          {children}
          <EndMsg />
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
