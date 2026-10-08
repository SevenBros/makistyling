import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name} ${site.role}` },
  description: "Maki Hayashi — product styling for cosmetics, fragrance, skincare and lifestyle brands.",
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: "Product styling for cosmetics, fragrance, skincare and lifestyle brands.",
    url: site.url,
    siteName: `${site.name} ${site.role}`,
    images: ["/photos/work-013.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#fbf9f7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
