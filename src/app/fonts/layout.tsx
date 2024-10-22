import type { Metadata } from "next";
import "../../styles/globals.css";
import Footer from "../../components/Footer";
import EndMsg from "../../components/EndMsg";
import HorizontalCard from '../../components/HorizontalCard';
import { Karla } from 'next/font/google';
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '../../components/GoogleTagManager';
import Hero from "../../components/Hero";
import { Toaster } from 'react-hot-toast';

const gtmId = process.env.GTM_ID || '';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fonts by Melanys",
  description: "A collection of fonts for your projects.",
  applicationName: "Fonts by Melanys",
  metadataBase: new URL('https://ui.melanys.me/fonts'),
  creator: "Melanys Figueredo",
  publisher: "Melanys Figueredo",
  authors: [{ name: "Melanys Figueredo", url: "https://melanys.me" }],
  keywords: ["UI components", "Fonts by Melanys", "Melanys Figueredo", "Melanys Figueredo Toledano", "Melanys Figueredo open source", "Melanys Figueredo Toledano open source", "Melanys Figueredo Toledano web design", "Melanys Figueredo Toledano web design open source", "Next.js", "TypeScript", "Tailwind CSS", "Open source", "Web design"],
  openGraph: {
    title: "Fonts by Melanys",
    description: "A collection of fonts for your projects.",
    url: "https://ui.melanys.me/",
    siteName: "Fonts by Melanys",
    images: [
      {
        url: "/assets/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Fonts by Melanys",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonts by Melanys",
    description: "A collection of fonts for your projects.",
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
    canonical: 'https://ui.melanys.me/fonts',
  },
};

export default function FontsLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <GoogleTagManagerScript gtmId={gtmId} />
        <main className={`${karla.variable} font-sans antialiased flex flex-col min-h-screen`}>
          <GoogleTagManagerNoScript gtmId={gtmId} />
          {children}
        </main>
      </>
    );
  }