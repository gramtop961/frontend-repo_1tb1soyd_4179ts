import React from 'react'
import { Shield, Github } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
            <Shield size={18} />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">HoloAuth</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#code" className="hover:text-white">Code</a>
          <a href="#waitlist" className="hover:text-white">Waitlist</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <Github size={16} />
          </a>
          <a
            href="#waitlist"
            className="hidden rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-white/90 md:inline-block"
          >
            Get access
          </a>
        </div>
      </div>
    </header>
  )
}
