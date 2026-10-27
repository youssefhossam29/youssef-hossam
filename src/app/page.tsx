import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import TechMarquee from "@/components/common/TechMarquee";
import TypewriterTitle from "@/components/home/TypewriterTitle";
import {
  ArrowRight,
  Download,
  Mail,
  MessageCircle,
  Server,
  Layout,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/common/Icons";

export default function HomePage() {
  const featuredOrder = ["mawrid", "aqlam", "hawaaeg"];
  const featuredProjects = featuredOrder
    .map((id) => projectsData.find((p) => p.id === id))
    .filter((p): p is (typeof projectsData)[number] => Boolean(p));

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[560px] bg-radial-glow pointer-events-none -z-10" />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">

            {/* Left Content (Clear Hierarchy & High Readability) */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7 items-center lg:items-start text-center lg:text-left">
              {/* Status Pill - Neon Cyber Depth Hover */}
              <div
                style={{ padding: "8px 20px" }}
                className="inline-flex items-center rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 backdrop-blur-sm shadow-sm cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.5),inset_0_0_12px_rgba(16,185,129,0.3)]"
              >
                <span>{siteConfig.brand.status.text}</span>
              </div>

              {/* Headline */}
              <h1 className="w-full">
                <TypewriterTitle />
              </h1>

              {/* Bio / Description (High contrast, easy to read) */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Specializing in building scalable Laravel web applications, robust RESTful APIs, and custom WordPress solutions—including E-Commerce stores, LMS platforms, and corporate websites—built for businesses looking to scale with confidence.
              </p>

              {/* CTA Buttons: Keep In Touch (Primary) & View CV (Secondary) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-1">
                <Link
                  href="/contact"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
                >
                  <span>Keep In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.brand.cvPath}
                  download="Youssef-Hossam-Software-Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline"
                >
                  <Download className="w-4 h-4 text-[var(--color-primary-light)]" />
                  <span>View CV</span>
                </a>
              </div>

              {/* Social Strip (Comfortable padding, WCAG touch target, centered icons) */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mr-1">
                  Find Me:
                </span>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 hover:border-emerald-500 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="WhatsApp Chat (@Youssef.Hossam29)"
                  title="WhatsApp: @Youssef.Hossam29"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.email}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Profile Card (Reusing exact About page image asset, unclipped badges) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/8 pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-[var(--color-primary)]/20 pointer-events-none" />

              <div className="relative w-[280px] sm:w-[350px] lg:w-[380px] aspect-square rounded-3xl glass-card p-4 shadow-2xl border border-white/20">
                {/* Inner Image Container (Only image has overflow-hidden) */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0E1A] border border-white/10 shadow-inner flex items-center justify-center">
                  <Image
                    src={siteConfig.logos.badgePrimary}
                    alt={siteConfig.brand.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 380px"
                    className="object-contain p-3 sm:p-4 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge 1: Backend (Laravel) */}
                <div
                  style={{ padding: "10px" }}
                  className="absolute -left-3 sm:-left-7 top-8 sm:top-12 z-20 rounded-2xl btn-base btn-outline backdrop-blur-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white whitespace-nowrap"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D20] shadow-[0_0_12px_#FF2D20] shrink-0" />
                  <span className="tracking-wide">Backend (Laravel)</span>
                </div>

                {/* Floating Badge 2: WordPress & WooCommerce */}
                <div
                  style={{ padding: "10px" }}
                  className="absolute -right-3 sm:-right-7 bottom-8 sm:bottom-12 z-20 rounded-2xl btn-base btn-outline backdrop-blur-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white whitespace-nowrap"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00749C] shadow-[0_0_12px_#00A4D6] shrink-0" />
                  <span className="tracking-wide">WordPress & WooCommerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CORE EXPERTISE TRACKS ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header !mb-12">
            {/* Specialized Engineering - Neon Cyber Depth Hover */}
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-accent)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.5),inset_0_0_12px_rgba(245,158,11,0.3)]"
            >
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Dual-Stack Expertise for Modern Digital Products
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Delivering scalable backend web applications alongside high-converting commercial platforms built to drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Pillar 1: Backend Architecture */}
            <div
              style={{ padding: "28px" }}
              className="glass-card relative overflow-hidden group flex flex-col justify-start gap-4 h-full hover:border-[var(--color-primary-light)]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] flex items-center justify-center border border-[var(--color-primary)]/30 group-hover:scale-105 transition-transform p-3.5">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Backend Development
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Building scalable web applications and RESTful APIs using PHP &amp; Laravel. Focused on clean architectures and secure third-party integrations.
              </p>
            </div>

            {/* Pillar 2: Custom WordPress & WooCommerce */}
            <div
              style={{ padding: "28px" }}
              className="glass-card relative overflow-hidden group flex flex-col justify-start gap-4 h-full hover:border-[var(--color-accent)]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center border border-[var(--color-accent)]/30 group-hover:scale-105 transition-transform p-3.5">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                WordPress, E-Commerce &amp; LMS Platforms
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Building responsive, high-performing, and multilingual WordPress solutions, including e-commerce stores, LMS platforms, and corporate websites, alongside custom plugin development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED PROJECTS ================= */}
      <section className="page-section">
        <div className="page-container">
          <div
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8 sm:gap-10"
          >
            <div className="flex flex-col gap-4">
              {/* Selected Works - Neon Cyber Depth Hover */}
              <span
                style={{ padding: "8px 20px" }}
                className="inline-block self-start rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
              >
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Projects &amp; Case Studies
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                A curated selection of scalable Laravel web apps and custom WordPress platforms tailored to diverse industry needs.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-base btn-outline self-start md:self-auto shrink-0"
            >
              <span>View All Projects ({projectsData.length})</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-primary-light)]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. TECH MARQUEE & STACK ================= */}
      <TechMarquee />

      {/* ================= 5. CALL TO ACTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="relative rounded-3xl p-10 sm:p-16 md:p-20 lg:p-24 overflow-hidden glass-card flex flex-col items-center justify-center text-center border border-white/15">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/15 via-transparent to-[var(--color-accent)]/15 pointer-events-none" />

            <div
              style={{ padding: "20px" }}
              className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-7 sm:gap-8 self-center"
            >
              {/* Let's Collaborate - Neon Cyber Depth Hover */}
              <span
                style={{ padding: "8px 20px" }}
                className="inline-flex items-center justify-center self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.5),inset_0_0_12px_rgba(16,185,129,0.3)]"
              >
                <span>Let&apos;s Collaborate</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center w-full">
                Have a Project in Mind?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-center w-full">
                Whether you are looking for a Backend Engineer for custom Laravel web apps, or need a high-converting WordPress, WooCommerce, or LMS platform—let&apos;s build it with precision.
              </p>

              {/* Exact 20px gap (gap-5) between buttons */}
              <div className="flex flex-wrap items-center justify-center gap-5 pt-3 w-full">
                <Link
                  href="/contact"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
