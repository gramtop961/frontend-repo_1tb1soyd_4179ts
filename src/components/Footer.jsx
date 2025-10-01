import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} HoloAuth, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="#security" className="hover:text-white">Security</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
