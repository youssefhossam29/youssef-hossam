import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Laravel Web Apps, E-Commerce & WordPress Solutions",
  description:
    "Explore live web development projects including custom PHP/Laravel applications, RESTful APIs, WooCommerce stores, and LMS platforms built for global clients.",
  keywords: [
    "Laravel Web Apps",
    "E-Commerce Solutions",
    "WordPress Solutions",
    "Custom PHP Applications",
    "RESTful APIs",
    "WooCommerce Stores",
    "LMS Platforms",
    "Laravel Projects",
    "PHP Backend Portfolio",
    "Youssef Hossam Projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Laravel Web Apps, E-Commerce & WordPress Solutions",
    description:
      "Explore live web development projects including custom PHP/Laravel applications, RESTful APIs, WooCommerce stores, and LMS platforms built for global clients.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio | Laravel Web Apps, E-Commerce & WordPress Solutions",
    description:
      "Explore live web development projects including custom PHP/Laravel applications, RESTful APIs, WooCommerce stores, and LMS platforms built for global clients.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
