"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function AboutPage() {
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
      <div className="container px-4 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I&apos;m Karolyne Costa, a product designer with a passion for creating intuitive digital experiences that
                solve real problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="button-primary">
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
                <a href="#" download className="button-secondary">
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Karolyne Costa portrait"
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

          {/* Bio Section */}
          <section className="mb-32">
            <h2 className="section-heading animate-on-scroll">My Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              <div className="md:col-span-2 text-gray-300 space-y-6 animate-on-scroll">
                <p className="leading-relaxed">
                  My name is Karolyne, I&apos;m 26 years old and I&apos;m
                  passionate about art, especially modern art linked
                  to technology.
                </p>
                <p className="leading-relaxed">
                  Therefore, I found in ux/ui design a
                  way to express my art in a creative and practical
                  way, reaching all users who are looking for
                  solutions to their challenges, through a singular
                  visual experience
                </p>
                <p className="leading-relaxed">
                  To consolidate this knowledge,
                  I became fluent in English in order to study a
                  degree in Communication Sciences in Europe.
                  Additionally, I specialized in User Experience
                  Design through a postgraduate course in UX/UI
                  Designer and acquired the Google UX Design
                  certification.I graduated in Communication Science with a
                  mark of 14
                </p>
              </div>
              <div className="bg-secondary p-10 rounded-lg animate-on-scroll">
                <h3 className="text-xl font-semibold mb-8">Quick Facts</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-400 text-sm mb-2">Based in</h4>
                    <p className="text-lg">Porto, Portugal</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-2">Experience</h4>
                    <p className="text-lg">4+ Years</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-2">Languages</h4>
                    <p className="text-lg">English, Spanish, French</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-2">Availability</h4>
                    <p className="text-lg">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-32">
            <h2 className="section-heading animate-on-scroll">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                  01
                </div>
                <h3 className="text-xl font-semibold mb-4">UX Design</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Creating intuitive user experiences through research, wireframing, and prototyping.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">User Research</span>
                      <span className="text-sm text-gray-400">90%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Wireframing</span>
                      <span className="text-sm text-gray-400">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Prototyping</span>
                      <span className="text-sm text-gray-400">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                  02
                </div>
                <h3 className="text-xl font-semibold mb-4">UI Design</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Crafting visually appealing interfaces with attention to detail and accessibility.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Visual Design</span>
                      <span className="text-sm text-gray-400">92%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Design Systems</span>
                      <span className="text-sm text-gray-400">88%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Accessibility</span>
                      <span className="text-sm text-gray-400">80%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary p-10 rounded-lg animate-on-scroll hover-lift">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold mb-8">
                  03
                </div>
                <h3 className="text-xl font-semibold mb-4">Product Strategy</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Aligning design solutions with business goals and user needs.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Product Thinking</span>
                      <span className="text-sm text-gray-400">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Data Analysis</span>
                      <span className="text-sm text-gray-400">75%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Stakeholder Management</span>
                      <span className="text-sm text-gray-400">82%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="mb-32">
            <h2 className="section-heading animate-on-scroll">Tools & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
              {[
                "Adobe XD",
                "Figma",
                "Design Thinking",
                "Illustrator",
                "Jira",
              ].map((tool) => (
                <div key={tool} className="bg-secondary p-6 rounded-lg text-center animate-on-scroll hover-lift">
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </section>


          {/* CTA Section */}
          <div className="text-center mt-32 mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8">Interested in working together?</h2>
            <Link href="/contact" className="button-primary">
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
        </div>
      </div>
    </main>
  )
}

