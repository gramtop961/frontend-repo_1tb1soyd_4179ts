import React from 'react'
import { ShieldCheck, Lock, Fingerprint, CheckCircle2 } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Passkeys-native', desc: 'FIDO2, WebAuthn, iCloud/Google password managers.' },
  { icon: Fingerprint, title: 'Biometrics', desc: 'Face ID, Touch ID and platform authenticators.' },
  { icon: Lock, title: 'Zero passwords', desc: 'No secrets at rest or in transit. Phishing-resistant.' },
  { icon: CheckCircle2, title: 'SOC2 ready', desc: 'Built-in auditing and device attestation.' },
]

export default function TrustBar() {
  return (
    <section id="features" className="border-y border-white/10 bg-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs leading-relaxed text-white/70">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
