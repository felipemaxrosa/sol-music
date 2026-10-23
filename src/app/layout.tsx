import type { Metadata, Viewport } from "next";
import "./globals.css";
import { activeFontHref } from "@/lib/fonts";
import { ACTIVE_THEME, themeColor } from "@/config/theme";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Instrumentos Musicais em ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "instrumentos musicais",
    "loja de música",
    site.city,
    "Litoral Norte",
    "violão",
    "guitarra",
    "Ubatuba",
    "São Sebastião",
    "Ilhabela",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Instrumentos Musicais em ${site.city}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: themeColor[ACTIVE_THEME],
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" data-theme={ACTIVE_THEME} className="h-full">
      <body className="flex min-h-dvh flex-col bg-bg text-fg antialiased">
        {/* React 19 eleva estes <link> para o <head>; sem <head> manual, o
            Next continua injetando a meta viewport corretamente. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={activeFontHref} precedence="default" />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
