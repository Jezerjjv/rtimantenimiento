import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { navLinks, site } from '../data/site'
import { lockScroll, scrollToId, scrollToTop, unlockScroll } from '../lib/scroll'
import { EASE } from '../lib/ease'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) lockScroll()
    else unlockScroll()
    return () => unlockScroll()
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    window.setTimeout(() => scrollToId(id), 60)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-flame"
          style={{ scaleX: reduce ? 0 : progress }}
        />
        <div className={`transition-[padding] duration-500 ${scrolled ? 'pt-3' : 'pt-4 sm:pt-6'}`}>
          <div className="shell">
            <div
              className={`flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
                scrolled
                  ? 'border border-white/10 bg-ink/85 px-4 py-2.5 backdrop-blur-xl sm:px-5'
                  : 'border border-transparent px-1 py-2 sm:px-2'
              }`}
            >
              <button
                type="button"
                onClick={scrollToTop}
                className="text-bone transition-opacity hover:opacity-70"
                aria-label="Ir al inicio"
              >
                <Logo />
              </button>

              <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => go(link.id)}
                    className="group relative text-[12px] uppercase tracking-[0.14em] text-bone/65 transition-colors hover:text-bone"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${site.phone}`}
                  className="hidden text-[12px] uppercase tracking-[0.14em] text-bone/65 transition-colors hover:text-bone lg:block"
                >
                  {site.phoneDisplay}
                </a>
                <span className="hidden sm:block">
                  <Button onClick={() => go('contacto')} variant="flame" size="sm">
                    Cotizar
                  </Button>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  className="grid size-11 place-items-center rounded-full border border-white/15 text-bone transition-colors hover:bg-white/5 md:hidden"
                  aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                  aria-expanded={open}
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="shell flex flex-1 flex-col justify-center pt-24 pb-10">
              <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => go(link.id)}
                    className="flex items-baseline gap-3 border-b border-white/10 py-4 text-left"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.6, ease: EASE }}
                  >
                    <span className="font-mono text-[10px] text-flame">0{index + 1}</span>
                    <span className="display text-4xl">{link.label}</span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                className="mt-10 flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Button onClick={() => go('contacto')} variant="flame" className="w-full">
                  Solicitar cotización
                </Button>
                <div className="flex flex-col gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50">
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <span>
                    {site.city} — {site.country}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
