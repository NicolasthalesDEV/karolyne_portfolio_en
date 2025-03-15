import Link from "next/link";
import { use } from "react";

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
      intro: "iFrete is a digital platform designed to simplify the transportation of furniture and bulky items, offering an affordable and efficient alternative to traditional freight services. The project was created with a focus on the user experience, ensuring intuitive navigation, price transparency and a fast scheduling flow, inspired by the usability of ride-sharing apps.",
      problem: "Furniture transportation services are often expensive and not very accessible for small moves. Users face difficulties with the lack of fast and economical options, as well as problems with price transparency and tracking. The challenge was to develop a solution that would solve these pains and make transportation more accessible and reliable.",
      research: { text: "Many people face difficulties when trying to find affordable services for small moves, deal with the lack of predictability regarding prices and delivery times, and even worry about the safety of the items being transported, which makes the process even more challenging" },
      process: { text: "I developed low and high fidelity wireframes to ensure an intuitive flow." },
      testing: { text: "After creating the prototype, I carried out usability tests to validate the navigation and resolve possible user difficulties. Adjustments were made to improve the clarity of the action buttons, simplify the checkout and make tracking more intuitive." },
      solution: { text: "The final version of iFrete offers an optimized user experience, including: Fast and transparent scheduling, with price stimation before confirmation. Real-time tracking, ensuring greater security for the user." },
      learnings: "Developing iFrete was an enriching experience that taught me a lot about how to solve complex problems with simple and efficient solutions. The main lesson was that the user experience is fundamental to the success of any digital platform. From the outset, we focused on ensuring an intuitive navigation flow and a clear interface, and this made all the difference to the acceptance of the project. Furthermore, the importance of testing and iterating cannot be underestimated.Through usability testing, we were able to identify points of frustration for users, which allowed us to make significant adjustments that resulted in a more fluid experience.Price transparency and real- time tracking were also crucial aspects that increased user confidence, which is essential for transportation services. Finally, by dealing with challenges such as accessibility, price predictability and security, I learned how simplicity and clarity in solutions can transform a complex service into something accessible and practical for everyday users.The project not only achieved its initial goals, but also provided me with valuable learning for future developments.",
      coverImage: "/imgem3.png",
  },
    verdano: {
      title: "Verdano – E-commerce UX/UI",
      category: "Web Design",
      intro: "Verdano is a digital platform designed to optimize the shopping experience for natural and sustainable products. The aim of the project was to create an intuitive interface, facilitating access to product information and ensuring a smooth and efficient purchasing journey. The design was designed to convey trust and transparency, highlighting the brand's visual identity and making the purchasing process more intuitive.",
      problem: "The main challenge was to create a platform that not only sold products, but also strengthened the vegan community by educating and inspiring customers. The goal was to ensure a fluid shopping experience, with a user-friendly interface and strategies to increase conversion",
      research: { text: "The shopping experience for vegan products is often hampered by the difficulty in finding tasty and affordable options, a lack of detailed information about ingredients and nutritional values, and a lengthy and insecure checkout process; solving these problems is essential to ensure a more satisfying and reliable shopping journey." },
      process: { text: "I developed a clear and functional structure, prioritizing easy navigation." },
      testing: { text: "Usability tests revealed the need to: Improve the visibility of ingredients and quality seals. Adjust the checkout layout to minimize distractions and speed up checkout." },
      solution: { text: "Visually attractive catalog with detailed descriptions. Optimized checkout, reducing cart abandonment rates. Recipe section and blog, increasing engagement and reinforcing brand value." },
      learnings: "Developing the Verdano platform was an enriching journey, where we learned the importance of combining functionality with the brand's value proposition. We discovered that, in addition to an intuitive design, it is essential to strengthen the connection with the community, especially in niches such as veganism, which seek not only products, but also education and inspiration. Through usability tests, it was possible to see the need for a visually attractive and informative catalog, as well as an optimized checkout to provide an agile and frictionless shopping experience. User feedback also reinforced the importance of transparency in ingredients and certifications, which helped to increase trust in the brand. By integrating these solutions, we were able not only to improve the shopping experience, but also to increase engagement with relevant content, such as recipes and articles, creating a more complete platform focused on customer well-being.",
      coverImage: "/imagem14.PNG",
    }
};
return projects[slug] || null;
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

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
