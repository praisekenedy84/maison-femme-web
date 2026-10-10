import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree, IBM_Plex_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Maison Femme",
    "Tanzania",
    "Dar es Salaam",
    "women's community",
    "CSR partnership",
    "breast cancer screening",
    "Pink Legacy",
    "advocacy",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_TZ",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1e1a24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${figtree.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
