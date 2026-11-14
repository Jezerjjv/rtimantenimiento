import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { Plus } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { Button } from './Button'
import { services } from '../data/site'
import { useMediaQuery } from '../lib/useMediaQuery'
import { scrollToId } from '../lib/scroll'

export function Services() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reduce = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.4 })
  const y = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.4 })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <section id="servicios" className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="02" label="Servicios" tone="light" />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.15rem,5vw,4.4rem)]">
              Soluciones integrales
              <br />
              <span className="serif-accent text-flame">para toda la planta.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-bone/55">
              Seis líneas de trabajo que se combinan según lo que necesite tu operación, desde una
              pieza hasta una parada de planta completa.
            </p>
          </Reveal>
        </div>

        <div
          ref={containerRef}
          className="relative mt-14 lg:mt-20"
          onMouseMove={isDesktop ? handleMove : undefined}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {isDesktop && hovered !== null && !reduce && (
              <motion.div
                key="preview"
                className="pointer-events-none absolute left-0 top-0 z-20"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[4px] border border-white/15 bg-ink-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                  <motion.img
                    key={services[hovered].image}
                    src={services[hovered].image}
                    alt=""
                    className="h-[340px] w-[270px] object-cover"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-white/10">
            {services.map((service, index) => {
              const isOpen = active === index

              return (
                <div key={service.id} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    onMouseEnter={() => setHovered(index)}
                    onFocus={() => setHovered(index)}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                        isOpen ? 'text-flame' : 'text-bone/25'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`display text-[clamp(1.35rem,3.3vw,2.75rem)] transition-all duration-500 ${
                        isOpen
                          ? 'text-flame'
                          : 'text-bone/90 group-hover:translate-x-2 group-hover:text-bone'
                      }`}
                    >
                      {service.title}
                    </span>
                    <span
                      className={`grid size-9 place-items-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? 'rotate-[135deg] border-flame bg-flame text-ink'
                          : 'border-white/20 text-bone/50 group-hover:border-white/50 group-hover:text-bone'
                      }`}
                    >
                      <Plus className="size-4" strokeWidth={1.75} />
                    </span>
                  </button>

                  <div
                    id={`service-panel-${service.id}`}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 sm:pl-[2.6rem] lg:grid-cols-12 lg:gap-10">
                        <div className="lg:col-span-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-flame/80">
                            {service.kicker}
                          </span>
                          <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-bone/70">
                            {service.description}
                          </p>
                        </div>
                        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[13.5px] leading-relaxed text-bone/55"
                            >
                              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-flame/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-[52ch] text-[14px] leading-relaxed text-bone/45">
            ¿Tu necesidad no aparece en la lista? La mayoría de nuestros trabajos empiezan con una
            visita técnica y una propuesta a la medida.
          </p>
          <Button variant="outline" onClick={() => scrollToId('contacto')}>
            Hablemos de tu planta
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
