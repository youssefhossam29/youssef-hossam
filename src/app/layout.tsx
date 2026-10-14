import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: "Youssef Hossam — Software Engineer | Laravel, PHP & WordPress",
  description:
    "Software Engineer (Laravel/WordPress) specializing in building scalable RESTful APIs, database architectures, and real-time web applications using PHP, Laravel, and MySQL.",
  keywords: [
    "Youssef Hossam",
    "Software Engineer",
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "WordPress Developer",
    "RESTful APIs",
    "WebSockets",
    "MySQL",
    "WooCommerce",
    "Payment Gateways",
    "MinIO/AWS S3",
    "OAuth",
    "Alexandria Egypt",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  alternates: {
    canonical: siteConfig.brand.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.brand.url,
    title: "Youssef Hossam — Backend Engineer | Laravel, PHP & WordPress",
    description:
      "Backend Engineer specializing in scalable Laravel APIs, database architecture, and custom high-converting WordPress & WooCommerce platforms.",
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/images/youssef-hero-grid.png",
        width: 1200,
        height: 630,
        alt: "Youssef Hossam — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Hossam — Backend Engineer | Laravel, PHP & WordPress",
    description:
      "Backend Engineer specializing in scalable Laravel APIs, database architecture, and custom high-converting WordPress & WooCommerce platforms.",
    images: ["/images/youssef-hero-grid.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.brand.name,
    jobTitle: "Software Engineer (Laravel / WordPress)",
    description: siteConfig.brand.shortBio,
    url: siteConfig.brand.url,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "WebSockets",
      "MySQL",
      "RBAC",
      "MinIO/AWS S3",
      "OAuth",
      "Payment Gateways",
      "WordPress",
      "Custom Plugin Development",
      "WooCommerce",
      "Polylang",
      "JetEngine",
      "Amelia LMS",
      "Tutor LMS",
      "Git",
      "Postman",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col justify-between selection:bg-[var(--color-primary)] selection:text-white"
      >
        <Header />
        <main className="flex-grow pt-24 sm:pt-28">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
