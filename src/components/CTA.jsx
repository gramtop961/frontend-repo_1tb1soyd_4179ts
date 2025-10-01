import React from 'react'

export default function CTA() {
  return (
    <section id="waitlist" className="py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Join the early access waitlist</h3>
        <p className="mt-2 text-white/70">Be the first to ship passwordless auth that disappears.</p>
        <form className="mt-6 flex items-center gap-3">
          <input
            type="email"
            required
            placeholder="name@company.com"
            className="w-full flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-600/20 transition hover:from-cyan-400 hover:to-blue-500"
          >
            Notify me
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
