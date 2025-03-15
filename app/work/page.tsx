"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

export default function WorkPage() {
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "iFrete – UX/UI for On-Demand Transportation",
      category: "mobile",
      tags: ["UX/UI Design", "Mobile App"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "ifrete",
    },
    {
      id: 2,
      title: "E-commerce Redesign",
      category: "web",
      tags: ["Web Design", "E-commerce"],
      image: "/placeholder.svg?height=600&width=800",
      slug: "verdano",
    }
  ];

  const [activeTab, setActiveTab] = useState("all");
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
  animatedElements.current = elements; // ✅ Agora armazenamos os elementos corretamente

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <main className="bg-black text-white">
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Here are some of the projects I&apos;ve worked on, focusing on user experience, digital strategy, and product
              design.
            </p>
          </div>

          <div className="mb-16">
            <div className="flex justify-center mb-12 animate-on-scroll">
              <div className="inline-flex h-12 items-center justify-center rounded-full bg-secondary p-1 text-gray-400">
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "all" ? "bg-accent text-white" : ""}`}
                  onClick={() => setActiveTab("all")}
                >
                  All Projects
                </button>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "mobile" ? "bg-accent text-white" : ""}`}
                  onClick={() => setActiveTab("mobile")}
                >
                  Mobile Apps
                </button>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "web" ? "bg-accent text-white" : ""}`}
                  onClick={() => setActiveTab("web")}
                >
                  Web Design
                </button>
                <button
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${activeTab === "digital" ? "bg-accent text-white" : ""}`}
                  onClick={() => setActiveTab("digital")}
                >
                  Digital Experience
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
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
    <Link href={`/work/${project.slug}`} className="project-card animate-on-scroll">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover project-image"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
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