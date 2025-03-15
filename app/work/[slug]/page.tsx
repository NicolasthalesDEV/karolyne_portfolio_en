"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, use } from "react"

interface ProjectData {
  title: string;
  category: string;
  coverImage: string;
  intro: string;
  problem: string;
  research: { text: string; image: string };
  process: { text: string; image: string };
  testing: { text: string; image: string };
  solution: { text: string; images: string[] };
  learnings: string;
}

const getProjectData = (slug: string): ProjectData | null => {
  const projects: Record<string, ProjectData> = {
    ifrete: {
      title: "iFrete – UX/UI for On-Demand Transportation",
      category: "Mobile App",
      coverImage: "/placeholder.svg?height=1200&width=2400",
      intro:
        "iFrete is an on-demand transportation platform connecting businesses with freight carriers. I led the UX/UI redesign to improve user engagement and streamline the booking process.",
      problem:
        "The existing app had a complex booking flow resulting in high abandonment rates. Users found it difficult to track shipments and communicate with carriers.",
      research: {
        text: "I conducted user interviews with both business owners and carriers to understand pain points and expectations. Through competitive analysis and usability testing, I identified key areas for improvement.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      process: {
        text: "Starting with user flows and wireframes, I mapped out a simplified booking process. I created a design system to ensure consistency across the app and developed interactive prototypes for testing.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      testing: {
        text: "Usability testing revealed that users wanted more transparency in pricing and carrier selection. I iterated on the design to address these concerns and conducted A/B testing to validate improvements.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      solution: {
        text: "The final design features a streamlined 3-step booking process, real-time tracking, and an improved messaging system. The new UI uses clear visual hierarchy and intuitive navigation to guide users.",
        images: [
          "/placeholder.svg?height=800&width=1200",
          "/placeholder.svg?height=800&width=1200",
          "/placeholder.svg?height=800&width=1200",
        ],
      },
      learnings:
        "This project taught me the importance of balancing business requirements with user needs. By simplifying complex processes and focusing on core user tasks, we were able to increase booking completion rates by 35% and improve user satisfaction scores.",
    },
  };

  return projects[slug] || null;
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectData(slug); 
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
  
    const elements = document.querySelectorAll(".animate-on-scroll");
    const elementsArray = Array.from(elements) as HTMLElement[];
    
    animatedElements.current = elementsArray;
    elementsArray.forEach((el) => observer.observe(el));
  
    return () => {
      elementsArray.forEach((el) => observer.unobserve(el));
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      <div className="relative h-[70vh]">
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black flex items-end">
          <div className="container px-4 pb-16">
            <Link href="/work" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
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
                className="mr-2 h-4 w-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to all projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">{project.title}</h1>
            <div className="mt-6">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">{project.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-24">
        {/* Introduction & Problem */}
        <section className="mb-32 animate-on-scroll">
          <h2 className="section-heading">Introduction & Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Overview</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{project.intro}</p>
              <h3 className="text-2xl font-semibold mb-6">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-secondary p-10 rounded-lg">
              <h3 className="text-2xl font-semibold mb-8">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Timeline</h4>
                  <p className="text-lg">12 weeks</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-2">My Role</h4>
                  <p className="text-lg">Lead UX/UI Designer</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Deliverables</h4>
                  <p className="text-lg">User Research, Wireframes, UI Design, Interactive Prototype</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-2">Tools</h4>
                  <p className="text-lg">Figma, Maze, Miro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Solution */}
        <section className="mb-32">
          <h2 className="section-heading animate-on-scroll">Final Solution</h2>
          <p className="text-gray-300 mb-16 max-w-3xl leading-relaxed animate-on-scroll">{project.solution.text}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.solution.images.map((image, index) => (
              <div key={index} className="relative h-[500px] rounded-lg overflow-hidden animate-on-scroll">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Final design ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Learnings & Reflections */}
        <section className="mb-32">
          <h2 className="section-heading animate-on-scroll">Learnings & Reflections</h2>
          <div className="bg-secondary p-10 rounded-lg mt-12 animate-on-scroll">
            <p className="text-gray-300 leading-relaxed">{project.learnings}</p>
          </div>
        </section>

        {/* Next Project */}
        <div className="text-center mt-32 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-8">Ready to see more?</h2>
          <Link href="/work" className="button-primary">
            Next Project
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
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
