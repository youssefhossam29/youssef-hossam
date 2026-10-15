"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative">
      <section className="page-section">
        <div className="page-container">

          {/* Page Header */}
          <div className="w-full mx-auto flex flex-col items-center justify-center text-center gap-6 mb-14 pt-8">
            <div
              style={{ padding: "8px 20px" }}
              className="inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              <span>Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Web Applications &{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] via-sky-400 to-[var(--color-accent)]">
                Digital Platforms
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Live production projects across custom Laravel web apps, E-Commerce stores, corporate sites, and LMS platforms—built to turn complex needs into seamless digital experiences.            </p>
          </div>

          {/* Category Filter (Padding: 30px, 20px gap between category elements) */}
          <div style={{ padding: "30px" }} className="flex flex-wrap items-center justify-center gap-5 mb-14">
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category;
              const count =
                category === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn-base ${isSelected
                    ? "btn-primary shadow-lg shadow-[var(--color-primary)]/25 scale-105"
                    : "btn-outline text-[var(--color-text-muted)]"
                    }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs bg-transparent border-0 ${isSelected ? "text-white font-bold" : "text-[var(--color-text-dim)]"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
