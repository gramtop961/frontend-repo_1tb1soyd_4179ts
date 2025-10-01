import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              New • Passkeys + WebAuthn built-in
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Auth that <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">disappears</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Drop-in passwordless authentication for modern apps. Biometric logins via passkeys and WebAuthn, wired up in one line of code.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-600/20 transition hover:from-cyan-400 hover:to-blue-500"
              >
                Get early access
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                View docs
              </a>
              <span className="ml-2 text-xs text-white/50">No passwords. No SMS. Just tap.</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-1 backdrop-blur sm:h-[520px]">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
