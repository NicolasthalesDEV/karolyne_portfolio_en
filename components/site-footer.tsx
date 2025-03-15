import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-bold text-2xl">
              KC<span className="text-gray-500">.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Product designer focused on creating intuitive digital experiences that solve real problems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/karolyne-costa-3167a3208/" className="social-icon" aria-label="LinkedIn">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Karolyne Costa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

