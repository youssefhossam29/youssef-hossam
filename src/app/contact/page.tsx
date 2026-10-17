"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/common/Icons";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or reach out directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <section className="page-section">
        <div className="page-container">

          {/* Page Header (Full Width, Centered, Gap: 24px) */}
          <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-6 mb-16 pt-8">
            <div
              style={{ padding: "8px 20px" }}
              className="self-center w-fit inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] via-sky-400 to-[var(--color-accent)]">
                Let&apos;s Talk About Your Next Project
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re hiring a Backend Engineer, need a custom web application, or want to build an E-Commerce or LMS platform—I&apos;m ready to help you scale with confidence.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div
            style={{ paddingTop: "30px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full"
          >

            {/* Left: Contact Info (Padding: 20px, Gap: 20px) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div style={{ padding: "20px" }} className="glass-card flex flex-col gap-5">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Location */}
                  <div
                    style={{ padding: "10px" }}
                    className="flex items-start gap-4 rounded-xl bg-white/[0.03] border border-white/8"
                  >
                    <div className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0 p-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                        Location
                      </h4>
                      <p className="text-sm font-semibold text-white">
                        Alexandria, Egypt (Available for Remote &amp; Relocation)
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    style={{ padding: "10px" }}
                    className="flex items-start justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-[var(--color-accent)] shrink-0 bg-transparent border-0 p-1">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                          Email Address
                        </h4>
                        <a
                          href={`mailto:${siteConfig.brand.email}`}
                          className="text-sm font-semibold text-white hover:text-[var(--color-primary-light)] transition-colors break-all"
                        >
                          {siteConfig.brand.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      style={{ backgroundColor: "transparent", border: "none" }}
                      className="p-2.5 rounded-xl bg-transparent hover:bg-white/10 text-white transition-colors shrink-0 border-0"
                      title="Copy email"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-[var(--color-text-muted)]" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div
                    style={{ padding: "10px" }}
                    className="flex items-start gap-4 rounded-xl bg-white/[0.03] border border-white/8"
                  >
                    <div className="text-emerald-400 shrink-0 bg-transparent border-0 p-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                        Phone &amp; WhatsApp
                      </h4>
                      <a
                        href={siteConfig.brand.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {siteConfig.brand.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links (20px gap, padded icons with rounded-xl, 0 border) */}
                <div className="pt-2 border-0 flex flex-col gap-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)]">
                    Follow My Engineering Work
                  </h4>
                  <div className="flex items-center gap-5">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 hover:border-emerald-500 transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (Padding: 20px, Gap: 20px) */}
            <div className="lg:col-span-7">
              <div style={{ padding: "20px" }} className="glass-card border border-white/10 shadow-2xl flex flex-col gap-5">
                {isSubmitted ? (
                  <div className="py-16 text-center flex flex-col items-center justify-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                      Thank you for reaching out, {formData.fullName}. I have received your message and will review it promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                        setErrorMessage(null);
                      }}
                      className="btn-base btn-outline mt-4"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold text-white">Send a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Full Name"
                        aria-label="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ padding: "12px 18px", borderRadius: "14px" }}
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                      />

                      {/* Email */}
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Email"
                        aria-label="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ padding: "12px 18px", borderRadius: "14px" }}
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+20 10 1234 5678"
                        aria-label="Phone / WhatsApp"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ padding: "12px 18px", borderRadius: "14px" }}
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                      />

                      {/* Subject */}
                      <input
                        id="subject"
                        type="text"
                        required
                        placeholder="Subject"
                        aria-label="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ padding: "12px 18px", borderRadius: "14px" }}
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                      />
                    </div>

                    {/* Message */}
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell me briefly about your project goals, timeline, or role details..."
                      aria-label="Project details"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ padding: "12px 18px", borderRadius: "14px" }}
                      className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm resize-none"
                    />

                    {/* Error Feedback Message */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit - Unified Button Standards */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25 w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
