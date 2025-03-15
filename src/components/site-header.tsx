"use client"

import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl text-white">
          KC<span className="text-zinc-500">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-zinc-200 hover:text-white">
            Home
          </Link>
          <Link href="/work" className="text-sm font-medium text-zinc-200 hover:text-white">
            Work
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-200 hover:text-white">
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-200 hover:text-white border border-white rounded-md px-3 py-1 hover:bg-zinc-800"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden relative">
          <button className="border border-zinc-700 rounded-md p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-zinc-800 rounded-md shadow-xl z-50">
              <Link
                href="/"
                className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/work"
                className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

