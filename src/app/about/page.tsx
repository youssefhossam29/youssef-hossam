"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  experienceData,
  educationData,
} from "@/data/about";
import TechMarquee from "@/components/common/TechMarquee";
import {
  Download,
  GraduationCap,
  Calendar,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative">

      {/* ================= 1. BIO & INTRODUCTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">

            {/* Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              <div className="relative w-[280px] sm:w-[320px] aspect-square rounded-3xl overflow-hidden glass-card p-4 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0E17]">
                  <Image
                    src={siteConfig.logos.badgePrimary}
                    alt={siteConfig.brand.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <span
                  style={{ padding: "8px 20px" }}
                  className="rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.5),inset_0_0_12px_rgba(16,185,129,0.3)]"
                >
                  Available for Opportunities
                </span>
                <span
                  style={{ padding: "8px 20px" }}
                  className="rounded-xl text-xs font-semibold bg-white/5 text-[var(--color-text-muted)] border border-white/10 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_24px_rgba(255,255,255,0.3),inset_0_0_12px_rgba(255,255,255,0.15)]"
                >
                  Alexandria, Egypt
                </span>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
              <div
                style={{ padding: "8px 20px" }}
                className="self-center lg:self-start w-fit inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
              >
                <span>About Me</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]">
                  Youssef Hossam
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                A Software Engineer currently working as a Backend Laravel Developer at Gen-Tech, holding a B.Sc. in Computer Science and Statistics from the Faculty of Science at Alexandria University (GPA: 3.6 / 4.0).
              </p>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                I specialize in delivering end-to-end digital solutions—ranging from scalable Laravel backend applications to high-converting WordPress platforms, including custom E-Commerce stores, interactive LMS portals, and multilingual corporate websites engineered to help businesses scale with confidence.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
                <a
                  href={siteConfig.brand.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <Link
                  href="/contact"
                  className="btn-base btn-outline"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-primary-light)]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 3. EXPERIENCE TIMELINE ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              Work Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Professional Experience
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              Proven track record of delivering scalable Laravel backend architectures, RESTful APIs, and custom WordPress platforms in production environments.
            </p>
          </div>

          <div className="relative w-full mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent hidden sm:block" />

            <div className="space-y-12">
              {experienceData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-center ${isEven ? "sm:flex-row-reverse" : ""} w-full`}
                  >
                    {/* Node dot */}
                    <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[#0B1120] shadow-lg shadow-[var(--color-primary)]/50 z-10" />

                    <div
                      style={{ padding: "0 20px" }}
                      className="w-full sm:w-1/2 sm:px-8 mx-auto"
                    >
                      <div
                        style={{ padding: "20px" }}
                        className="glass-card relative group hover:border-[var(--color-primary-light)] transition-all flex flex-col gap-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            style={{ padding: "8px 12px" }}
                            className="rounded text-xs font-semibold bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                          >
                            {item.type}
                          </span>
                          <span
                            style={{ padding: "8px 12px" }}
                            className="text-xs text-[var(--color-text-dim)] flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/5"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white">{item.role}</h3>
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-[var(--color-primary-light)] hover:text-white inline-flex items-center gap-1.5 transition-colors group/link mt-0.5"
                            >
                              <span>{item.company}</span>
                              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          ) : (
                            <h4 className="text-sm font-semibold text-[var(--color-primary-light)] mt-0.5">
                              {item.company}
                            </h4>
                          )}
                        </div>

                        <ul
                          style={{ paddingTop: "10px" }}
                          className="space-y-4 text-xs text-[var(--color-text-muted)] leading-relaxed border-t border-white/5"
                        >
                          {item.description.map((bullet, i) => (
                            <li key={i} style={{ paddingTop: "10px" }} className="flex items-start gap-2.5">
                              <span
                                style={{ marginTop: "7px" }}
                                className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] shrink-0"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. EDUCATION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-[var(--color-primary-light)] hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Education & Training
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              Combining a strong academic foundation in Computer Science and Statistics with intensive hands-on software engineering training at ITI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                style={{ padding: "20px" }}
                className="glass-card relative group hover:border-[var(--color-primary-light)] transition-all flex flex-col gap-5 h-full"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    style={{ padding: "8px 12px" }}
                    className="rounded text-xs font-semibold bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center gap-1.5"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </span>
                  <span
                    style={{ padding: "8px 12px" }}
                    className="text-xs text-[var(--color-text-dim)] flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-sm font-semibold text-[var(--color-primary-light)] mt-0.5">
                    {edu.institution}
                  </h4>
                </div>

                <ul
                  style={{ paddingTop: "10px" }}
                  className="space-y-4 text-xs text-[var(--color-text-muted)] leading-relaxed border-t border-white/5"
                >
                  {edu.highlights.map((h, i) => (
                    <li key={i} style={{ paddingTop: "10px" }} className="flex items-start gap-2.5">
                      <span
                        style={{ marginTop: "7px" }}
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] shrink-0"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />
    </div>
  );
}
