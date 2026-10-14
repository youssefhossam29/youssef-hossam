import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Case Studies | Youssef Hossam — Backend & Web Architect",
  description:
    "Explore 17+ live production systems engineered by Youssef Hossam: high-concurrency Laravel REST APIs, real-time marketplace platforms, custom WooCommerce architectures, and scalable LMS solutions.",
  keywords: [
    "Laravel Projects",
    "PHP Backend Portfolio",
    "RESTful API Case Studies",
    "WooCommerce Development",
    "Paymob Integration",
    "Stripe Gateway",
    "Youssef Hossam Projects",
    "Custom Web Applications Egypt",
  ],
  openGraph: {
    title: "Projects & Engineering Case Studies | Youssef Hossam",
    description:
      "Explore 17+ verified production systems: scalable Laravel backends, real-time platforms, and high-converting commercial architectures.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
