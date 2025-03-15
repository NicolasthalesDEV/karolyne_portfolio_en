"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6"}`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          KC<span className="text-gray-500">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link href="/work" className={`nav-link ${isActive("/work") ? "active" : ""}`}>
            Work
          </Link>
          <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
          <Link href="/contact" className="button-secondary py-1 px-4 h-auto text-sm rounded-full">
            Contact
          </Link>
        </nav>

        <div className="md:hidden relative">
          <button
            className="w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "top-2 rotate-45" : "top-0"}`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-2 opacity-100"}`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "top-2 -rotate-45" : "top-4"}`}
              ></span>
            </div>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-4 w-screen h-screen bg-black fixed top-12 left-0 z-50 animate-fade-in">
              <div className="flex flex-col items-center justify-center h-full gap-12 text-center">
                <Link href="/" className="text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/work" className="text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                  Work
                </Link>
                <Link href="/about" className="text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

