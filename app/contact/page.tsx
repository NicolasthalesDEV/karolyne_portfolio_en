"use client"

import { useEffect, useRef } from "react"

export default function ContactPage() {
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
          <div className="text-center mb-24 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <h2 className="section-heading">Contact Information</h2>

              <div className="space-y-12 mt-12">
                <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-full mr-6">
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
                      className="h-6 w-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Email</h3>
                    <p className="text-gray-400 text-lg">karolyne.ksgc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-full mr-6">
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
                      className="h-6 w-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Phone</h3>
                    <p className="text-gray-400 text-lg">+351 (91) 537 7246</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-4 rounded-full mr-6">
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
                      className="h-6 w-6"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Location</h3>
                    <p className="text-gray-400 text-lg">Porto, Portugal</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="section-heading">Follow Me</h2>
                <div className="flex space-x-4 mt-12">
                  <a href="https://www.linkedin.com/in/karolyne-costa-3167a3208/" className="social-icon" aria-label="LinkedIn">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.6 2H4.4C3.45 2 2.7 2.75 2.7 3.7v16.6c0 .95.75 1.7 1.7 1.7h15.2c.95 0 1.7-.75 1.7-1.7V3.7c0-.95-.75-1.7-1.7-1.7zM8.5 18.2H5.6v-9h2.9v9zm-1.5-10.4h-.1c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.6-1.4 1 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.5 1.4zm12.8 10.4h-2.9v-4.5c0-1.1-.8-1.7-1.7-1.7-1 0-1.6.7-1.6 1.7v4.5h-2.9v-9h2.9v1.3c.4-.6 1.1-1.3 2.4-1.3 1.7 0 3 1.3 3 3.4v5.6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <h2 className="section-heading">Send a Message</h2>

              <form className="space-y-8 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-secondary border-0 rounded-md p-4 text-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-secondary border-0 rounded-md p-4 text-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="Subject"
                    className="w-full bg-secondary border-0 rounded-md p-4 text-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="w-full bg-secondary border-0 rounded-md p-4 text-white focus:ring-2 focus:ring-white/20 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button type="submit" className="button-primary w-full py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
