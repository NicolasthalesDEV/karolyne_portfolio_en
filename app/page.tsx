"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Home() {
  const animatedElements = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      observer.observe(el)
      animatedElements.current.push(el as HTMLElement)
    })

    return () => {
      animatedElements.current.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                Karolyne Costa
                <span className="block text-gray-400 mt-4 text-2xl md:text-3xl font-normal">
                  Product Designer | UX/UI
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-12 max-w-xl leading-relaxed">
                I create intuitive digital experiences that solve real problems. My approach combines user research,
                strategic thinking, and pixel-perfect execution to deliver products people love to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/work" className="button-primary">
                  View Projects
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
                <Link href="/about" className="button-secondary">
                  About Me
                </Link>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Karolyne Costa's design work showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">UX/UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <Link href={`/work/project-${item}`} key={item} className="project-card animate-on-scroll">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=600&width=800`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover project-image"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">UX/UI Design • Mobile App</p>
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
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
            ))}
          </div>
          <div className="mt-16 text-center animate-on-scroll">
            <Link href="/work" className="button-secondary">
              View All Projects
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
      </section>

      {/* Design Approach */}
      <section className="py-24">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4">Research & Discovery</h3>
              <p className="text-gray-400 leading-relaxed">
                Understanding user needs through research, interviews, and data analysis to identify opportunities.
              </p>
            </div>
            <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                02
              </div>
              <h3 className="text-xl font-semibold mb-4">Design & Prototype</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating intuitive interfaces and interactive prototypes that solve real user problems.
              </p>
            </div>
            <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4">Test & Iterate</h3>
              <p className="text-gray-400 leading-relaxed">
                Validating solutions through user testing and refining designs based on feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to work together?</h2>
          <p className="text-gray-400 mb-12 animate-on-scroll">
            I'm currently available for freelance projects and full-time opportunities. Let's create something amazing
            together.
          </p>
          <Link href="/contact" className="button-primary animate-on-scroll">
            Get in Touch
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
      </section>
    </main>
  )
}

