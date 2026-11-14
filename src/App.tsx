import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Capabilities } from './components/Capabilities'
import { About } from './components/About'
import { People } from './components/People'
import { Services } from './components/Services'
import { Approach } from './components/Approach'
import { Gallery } from './components/Gallery'
import { Safety } from './components/Safety'
import { Clients } from './components/Clients'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { setSmoothScroll } from './lib/scroll'

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    setSmoothScroll(lenis)

    let frame = 0
    const loop = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setSmoothScroll(null)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-ink">
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-flame focus:px-5 focus:py-3 focus:text-[12px] focus:uppercase focus:tracking-[0.14em] focus:text-ink"
      >
        Ir al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <About />
        <People />
        <Services />
        <Approach />
        <Gallery />
        <Safety />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <Grain />
    </div>
  )
}
