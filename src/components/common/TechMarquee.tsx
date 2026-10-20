"use client";

import React from "react";
// Official Brand SVG Icons
import {
  BrandLaravel,
  BrandPhp,
  BrandMysql,
  BrandHtml5,
  BrandCss3,
  BrandJavascript,
  BrandBootstrap,
  BrandSocketIo,
  BrandMinio,
  BrandOAuth,
  BrandSwagger,
  BrandPostman,
  BrandGit,
  BrandGithub,
  BrandGitlab,
  BrandJwt,
  BrandGoogle,
  BrandSentry,
  BrandTwilio,
  BrandPaypal,
  BrandTelegram,
  BrandWordpress,
  BrandWoocommerce,
  BrandMoodle,
  BrandGoogleSheets,
  BrandInstagram,
  BrandStripe,
  BrandWebRtc,
} from "@/components/common/BrandIcons";

import {
  Server,
  CreditCard,
  ShieldCheck,
  KeyRound,
  Image,
  Radio,
  Share2,
  Activity,
  Telescope,
  Blocks,
  Languages,
  Cpu,
  Calendar,
  GraduationCap,
  Truck,
  Package,
  ShoppingCart,
  Sliders,
  Database,
  MessagesSquare,
  CheckCircle2,
  Award,
  Repeat,
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Top Ribbon: Backend & Engineering Stack with Official Icons
const backendTech: TechItem[] = [
  { name: "Laravel", icon: BrandLaravel },
  { name: "PHP", icon: BrandPhp },
  { name: "RESTful APIs", icon: Server },
  { name: "MySQL", icon: BrandMysql },
  { name: "HTML", icon: BrandHtml5 },
  { name: "CSS", icon: BrandCss3 },
  { name: "JavaScript", icon: BrandJavascript },
  { name: "Bootstrap", icon: BrandBootstrap },
  { name: "WebSockets", icon: BrandSocketIo },
  { name: "Paymob Gateway", icon: CreditCard },
  { name: "MinIO S3 Storage", icon: BrandMinio },
  { name: "OAuth", icon: BrandOAuth },
  { name: "RBAC", icon: ShieldCheck },
  { name: "Laravel Passport", icon: BrandLaravel },
  { name: "Spatie Media", icon: Image },
  { name: "Passport", icon: KeyRound },
  { name: "Socialite", icon: Share2 },
  { name: "Reverb", icon: Radio },
  { name: "Swagger/OpenAPI", icon: BrandSwagger },
  { name: "Postman", icon: BrandPostman },
  { name: "Git", icon: BrandGit },
  { name: "GitHub", icon: BrandGithub },
  { name: "GitLab", icon: BrandGitlab },
  { name: "Laravel Sanctum", icon: BrandLaravel },
  { name: "JWT", icon: BrandJwt },
  { name: "Google reCAPTCHA", icon: BrandGoogle },
  { name: "Laravel Pulse", icon: Activity },
  { name: "Laravel Telescope", icon: Telescope },
  { name: "Sentry", icon: BrandSentry },
  { name: "Twilio SMS", icon: BrandTwilio },
  { name: "PayPal Gateway", icon: BrandPaypal },
  { name: "Telegram Bot API", icon: BrandTelegram },
];

// Bottom Ribbon: WordPress, LMS & E-Commerce Stack with Official Icons
const wordpressTech: TechItem[] = [
  { name: "WordPress", icon: BrandWordpress },
  { name: "WooCommerce", icon: BrandWoocommerce },
  { name: "Custom plugin development", icon: Blocks },
  { name: "Polylang", icon: Languages },
  { name: "JetEngine", icon: Cpu },
  { name: "Amelia Booking", icon: Calendar },
  { name: "Tutor LMS", icon: GraduationCap },
  { name: "Bosta Integration", icon: Truck },
  { name: "Flexible Shipping", icon: Package },
  { name: "FunnelKit Cart", icon: ShoppingCart },
  { name: "Variation Swatches", icon: Sliders },
  { name: "ACF", icon: Database },
  { name: "Moodle Integration", icon: BrandMoodle },
  { name: "GSheet Connector for Forms", icon: BrandGoogleSheets },
  { name: "Google Reviews Integration", icon: BrandGoogle },
  { name: "Instagram Feed", icon: BrandInstagram },
  { name: "Stripe Gateway", icon: BrandStripe },
  { name: "Daily.co Integration", icon: BrandWebRtc },
  { name: "Better Messages", icon: MessagesSquare },
  { name: "FunnelKit Checkout", icon: CheckCircle2 },
  { name: "myCred Points", icon: Award },
  { name: "WooCommerce Subscription", icon: Repeat },
];

export default function TechMarquee() {
  return (
    <section className="page-section overflow-hidden relative border-y border-white/5 bg-[#080C16]">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <div className="page-container mb-8 sm:mb-10">
        <div className="section-header !mb-6">
          <span
            style={{ padding: "8px 20px" }}
            className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
          >
            Tech Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Core Technologies &amp; Development Tools
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Specialized toolkit spanning Laravel backend development, WordPress &amp; WooCommerce platforms, database architectures, and third-party integrations.
          </p>
        </div>
      </div>

      {/* Dynamic Animated Marquee Ribbons */}
      <div className="relative flex flex-col gap-4 sm:gap-5 pt-4 pb-2">
        {/* Ribbon 1: Left (Backend & Engineering) */}
        <div className="animate-marquee-left flex gap-5">
          {[...backendTech, ...backendTech].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`ticker-top-${index}`}
                style={{ padding: "10px 18px" }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white min-w-[170px] sm:min-w-[190px] shrink-0 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary-light)] hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.25)] group"
              >
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-tight text-center whitespace-nowrap">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Ribbon 2: Right (Reverse Direction - WordPress, LMS & Integrations) */}
        <div className="animate-marquee-right flex gap-5">
          {[...wordpressTech, ...wordpressTech].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`ticker-bottom-${index}`}
                style={{ padding: "10px 18px" }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white min-w-[170px] sm:min-w-[190px] shrink-0 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary-light)] hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.25)] group"
              >
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-tight text-center whitespace-nowrap">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
