import Link from "next/link";

interface ProjectData {
  title: string;
  category: string;
  intro: string;
  problem: string;
  research: { text: string };
  process: { text: string };
  testing: { text: string };
  solution: { text: string };
  learnings: string;
  coverImage: string;
}

const getProjectData = (slug: string): ProjectData | null => {
  const projects: Record<string, ProjectData> = {
    ifrete: {
      title: "iFrete – UX/UI for On-Demand Transportation",
      category: "Mobile App",
      intro: "iFrete is an on-demand transportation platform...",
      problem: "The existing app had a complex booking flow...",
      research: { text: "User interviews and usability testing..." },
      process: { text: "Wireframes and prototypes..." },
      testing: { text: "A/B testing for improvements..." },
      solution: { text: "The final design features a 3-step booking process..." },
      learnings: "Balancing business needs with user experience...",
      coverImage: "/imagem3.png",
    },
    verdano: {
      title: "Verdano – E-commerce UX/UI",
      category: "Web Design",
      intro: "Verdano is an online marketplace for eco-friendly products...",
      problem: "Users found the checkout process too complex...",
      research: { text: "We analyzed heatmaps and customer feedback..." },
      process: { text: "Developed a streamlined checkout flow..." },
      testing: { text: "Conducted usability tests with real users..." },
      solution: { text: "A simplified and mobile-friendly UI..." },
      learnings: "The importance of accessibility in e-commerce...",
      coverImage: "/imagem14.png",
    }
  };
  return projects[slug] || null;
};

// ❌ Remova o uso de `use(params)`, pois não é necessário
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Agora acessamos diretamente sem `use()`

  const project = getProjectData(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      <div className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.coverImage})`,
            opacity: 0.9
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
      </div>
      <div className="container px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">{project.category}</span>

        <section className="mt-12 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Introduction & Problem</h2>
          <p className="text-gray-400 mb-4">{project.intro}</p>
          <p className="text-gray-400 mb-4">{project.problem}</p>
        </section>

        <section className="mt-12 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Research & Process</h2>
          <p className="text-gray-400 mb-4">{project.research.text}</p>
          <p className="text-gray-400 mb-4">{project.process.text}</p>
        </section>

        <section className="mt-12 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Testing & Validation</h2>
          <p className="text-gray-400 mb-4">{project.testing.text}</p>
        </section>

        <section className="mt-12 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Final Solution</h2>
          <p className="text-gray-400 mb-4">{project.solution.text}</p>
        </section>

        <section className="mt-12 border border-gray-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Learnings & Reflections</h2>
          <p className="text-gray-400 mb-4">{project.learnings}</p>
        </section>

        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold mb-8">Ready to see more?</h2>
          <Link href="/work" className="button-primary">
            Next Project
          </Link>
        </div>
      </div>
    </main>
  );
}
