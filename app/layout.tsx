import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Differential Aluminum & Steel Co. Ltd | Port Harcourt", template: "%s | Differential Aluminum & Steel" },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "en_NG", siteName: siteConfig.name, title: "Differential Aluminum & Steel Co. Ltd", description: siteConfig.description, url: siteConfig.url, images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Differential Aluminum and Steel" }] },
  twitter: { card: "summary_large_image", title: "Differential Aluminum & Steel Co. Ltd", description: siteConfig.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#17191b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "LocalBusiness", name: siteConfig.name, description: siteConfig.description, address: { "@type": "PostalAddress", addressLocality: siteConfig.city, addressRegion: "Rivers State", addressCountry: "NG" }, areaServed: siteConfig.city, url: siteConfig.url, priceRange: "$$" };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/></body></html>;
}
