import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import CodeSnippets from './components/CodeSnippets'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-16">
        <Hero />
        <TrustBar />
        <CodeSnippets />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
