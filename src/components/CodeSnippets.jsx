import React from 'react'
import { Copy } from 'lucide-react'

const snippets = [
  {
    label: 'Install',
    language: 'bash',
    code: 'npm i @holoauth/js',
  },
  {
    label: 'One line login',
    language: 'ts',
    code: "await holoauth.login()",
  },
  {
    label: 'Server verify',
    language: 'ts',
    code: `import { verify } from '@holoauth/server'\nconst session = await verify(request)`,
  },
]

function SnippetCard({ label, language, code }) {
  const [copied, setCopied] = React.useState(false)
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {}
  }

  return (
    <div className="group relative flex flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-white/70">{label}</span>
        <button onClick={onCopy} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white hover:bg-white/10">
          <Copy size={14} /> {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-lg bg-black/60 p-3 text-[12px] leading-relaxed text-white/90">
        <code>
          {code}
        </code>
      </pre>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-fuchsia-500/0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-40" />
    </div>
  )
}

export default function CodeSnippets() {
  return (
    <section id="code" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">One line to go live</h2>
            <p className="mt-2 max-w-2xl text-white/70">Embed biometric logins with a single call. Built on WebAuthn and passkeys, fully compatible with major browsers.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {snippets.map((s) => (
            <SnippetCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
