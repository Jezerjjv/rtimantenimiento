import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { Button } from './Button'
import { WordReveal } from './Reveal'
import { scrollToId } from '../lib/scroll'
import { site } from '../data/site'

const facts = [
  { label: 'Normativa eléctrica', value: 'RETIE · NFPA 70E' },
  { label: 'Certificaciones', value: 'CCS · RUC' },
  { label: 'Base operativa', value: `${site.city} — ${site.country}` },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.16])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
      >
        <motion.img
          src="/img/hero.webp"
          alt="Equipo de R.T.I Mantenimiento en una planta industrial de Cerro Matoso"
          className="h-full w-full object-cover object-[50%_35%]"
          fetchPriority="high"
          decoding="async"
          initial={reduce ? undefined : { scale: 1.12, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/20 to-transparent" />
      </motion.div>

      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-[14%] top-[12%] -z-10 hidden size-[62vh] text-bone/25 animate-gear motion-reduce:animate-none lg:block"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="100" cy="100" r="64" />
          <circle cx="100" cy="100" r="46" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="18" />
          {Array.from({ length: 16 }).map((_, index) => {
            const angle = (index * Math.PI * 2) / 16
            return (
              <line
                key={index}
                x1={100 + Math.cos(angle) * 64}
                y1={100 + Math.sin(angle) * 64}
                x2={100 + Math.cos(angle) * 78}
                y2={100 + Math.sin(angle) * 78}
              />
            )
          })}
        </g>
      </svg>

      <motion.div
        className="shell relative flex flex-1 flex-col justify-end pt-32 pb-8 sm:pb-10"
        style={reduce ? undefined : { y: contentY, opacity: fade }}
      >
        <motion.div
          className="mb-7 flex items-center gap-3"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="size-1.5 shrink-0 rounded-full bg-flame animate-pulse-soft motion-reduce:animate-none" />
          <span className="eyebrow text-bone/70">
            Mantenimiento industrial · Montajes · Mecanizado
          </span>
        </motion.div>

        <h1 className="display text-[clamp(2.6rem,8.2vw,7.8rem)]">
          <span className="block">
            <WordReveal text="SOLUCIONES" delay={0.15} />
          </span>
          <span className="block">
            <WordReveal text="INTEGRALES" delay={0.25} />
          </span>
          <span className="block">
            <WordReveal
              text="para el sector industrial."
              delay={0.35}
              wordClassName="serif-accent normal-case text-flame"
            />
          </span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-12 md:items-end md:gap-10">
          <motion.p
            className="text-[15px] leading-relaxed text-bone/70 md:col-span-5 md:text-base"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9 }}
          >
            Calidad, seguridad y cumplimiento normativo en cada uno de sus proyectos. Mantenimiento
            mecánico y eléctrico, fabricación, mecanizado y montajes industriales.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-start"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9 }}
          >
            <Button onClick={() => scrollToId('contacto')} variant="flame">
              Solicitar cotización
            </Button>
            <Button onClick={() => scrollToId('servicios')} variant="outline">
              Ver servicios
            </Button>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => scrollToId('nosotros')}
            className="group hidden items-center justify-end gap-3 md:col-span-3 md:flex"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            aria-label="Bajar a la siguiente sección"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/40">
              Scroll
            </span>
            <span className="grid size-11 place-items-center rounded-full border border-white/20 text-bone/70 transition-colors group-hover:border-flame group-hover:text-flame">
              <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
          </motion.button>
        </div>

        <motion.dl
          className="mt-10 grid grid-cols-2 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ delay: 1.05, duration: 1 }}
        >
          {facts.map((fact) => (
            <div key={fact.label} className="col-span-1">
              <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone/35">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[13px] text-bone/85">{fact.value}</dd>
            </div>
          ))}
          <div className="col-span-2 hidden justify-end sm:col-span-1 sm:flex">
            <span className="text-right text-[11px] leading-relaxed text-bone/35">
              Barrio San Carlos
              <br />
              vía a Cerro Matoso
            </span>
          </div>
        </motion.dl>
      </motion.div>
    </section>
  )
}
