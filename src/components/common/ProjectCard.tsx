"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, Globe, Layers, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const targetUrl =
    project.liveUrl ||
    (project.link.startsWith("http://") || project.link.startsWith("https://")
      ? project.link
      : `https://${project.link}`);

  return (
    <div className="glass-card project-card group relative flex flex-col overflow-hidden h-full">
      {/* Mac Browser Mini Top Bar (Restored as requested) */}
      <div
        style={{ padding: "10px" }}
        className="flex items-center justify-between bg-[rgba(11,17,32,0.9)] border-b border-white/10 select-none"
      >
        {/* Mac OS Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" />
        </div>

        {/* Center URL Pill */}
        <div
          style={{ padding: "4px 10px" }}
          className="rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[var(--color-text-muted)] flex items-center gap-1.5 max-w-[180px] sm:max-w-[220px] truncate"
        >
          <Globe className="w-3 h-3 text-[var(--color-primary-light)] shrink-0" />
          <span className="truncate">{project.link}</span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Live</span>
        </div>
      </div>

      {/* Project Screenshot Display (Clickable - Unified height, edge-to-edge width, top-aligned) */}
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name}`}
        className="block relative w-full aspect-[2/1] bg-[#0A0E17] overflow-hidden cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-40 pointer-events-none" />
      </a>

      {/* Card Content & Details (Hierarchy: Badges -> Title -> Outcome Description -> Tech tags) */}
      <div
        style={{ padding: "10px" }}
        className="relative flex-1 flex flex-col justify-start gap-4"
      >
        <div className="flex flex-col gap-3 py-0.5">
          {/* Metadata Badges: Location & Industry only */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 min-h-[34px]">
            <span
              style={{ padding: "6px 10px" }}
              className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 rounded-md border border-white/8"
            >
              <MapPin className="w-3 h-3 text-[var(--color-primary-light)] shrink-0" />
              <span>{project.location}</span>
            </span>
            <span
              style={{ padding: "6px 10px" }}
              className="text-xs text-slate-300 flex items-center gap-1.5 bg-white/5 rounded-md border border-white/8"
            >
              <Layers className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
              <span>{project.industry}</span>
            </span>
          </div>

          {/* Title and Description Group (Reduced gap to gap-0.5) */}
          <div className="flex flex-col gap-0.5">
            {/* Project Title (Clickable & Equalized min-height across cards) */}
            <h3 className="text-lg sm:text-xl font-bold leading-snug min-h-[54px] flex items-start">
              {targetUrl ? (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="text-white hover:text-[var(--color-primary-light)] transition-colors inline-flex items-center gap-2 group/title"
                >
                  <span>{project.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-primary-light)] opacity-70 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all shrink-0" />
                </a>
              ) : (
                <span className="text-white">{project.name}</span>
              )}
            </h3>

            {/* Outcome-Oriented Description (3 lines fixed height with bottom spacing) */}
            <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed min-h-[68px] sm:min-h-[70px]">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Footer: Key Tech Tags (Starts at the EXACT same horizontal line across cards) */}
        <div
          style={{ padding: "10px 0 0 0" }}
          className="flex-1 flex items-start justify-between border-t border-white/10 gap-3"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                style={{ padding: "6px 10px" }}
                className="rounded-md text-xs font-semibold bg-white/5 text-slate-300 border border-white/8"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
