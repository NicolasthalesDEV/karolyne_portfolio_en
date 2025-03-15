"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "iFrete – UX/UI for On-Demand Transportation",
    category: "mobile",
    tags: ["UX/UI Design", "Mobile App"],
    image: "/imagem6.png",
    slug: "ifrete",
  },
  {
    id: 2,
    title: "Verdano",
    category: "web",
    tags: ["Web Design", "E-commerce"],
    image: "/imagem2.PNG",
    slug: "verdano",
  },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"all" | "mobile" | "web">("all");
  const animatedElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(document.querySelectorAll(".animate-on-scroll")) as HTMLElement[];
    animatedElements.current = elements;

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category.trim().toLowerCase() === activeTab);

  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Here are some of the projects I&apos;ve worked on, focusing on user experience, digital strategy, and product design.
            </p>
          </div>

          {/* Botões de Filtro */}
          <div className="mb-16">
            <div className="flex justify-center mb-12">
              <div className="inline-flex h-12 items-center justify-center rounded-full bg-secondary p-1 text-gray-400">
                {["all", "mobile", "web"].map((value) => (
                  <button
                    key={value}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${
                      activeTab === value ? "bg-accent text-white" : ""
                    }`}
                    onClick={() => setActiveTab(value as "all" | "mobile" | "web")}
                  >
                    {value === "all" ? "All Projects" : value === "mobile" ? "Mobile Apps" : "Web Design"}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={`${project.id}-${activeTab}-${index}`} project={project} />
                ))
              ) : (
                <p className="text-center text-gray-400">No projects found in this category.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-accent px-3 py-1 rounded-full text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-400 transition-colors">
          View Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-3 w-3"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
