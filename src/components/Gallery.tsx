import { useLayoutEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { gallery } from '../data/site'
import { useMediaQuery } from '../lib/useMediaQuery'

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [current, setCurrent] = useState(1)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    if (!isDesktop || reduce) {
      setDistance(0)
      return
    }

    const measure = () => {
      const width = trackRef.current?.scrollWidth ?? 0
      setDistance(Math.max(0, width - window.innerWidth))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isDesktop, reduce])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const progress = useTransform(scrollYProgress, [0, 1], [0.04, 1])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const index = Math.min(gallery.length, Math.floor(value * gallery.length) + 1)
    setCurrent(index)
  })

  const horizontal = isDesktop && !reduce

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative bg-ink"
      style={horizontal && distance > 0 ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div
        className={
          horizontal
            ? 'relative lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:overflow-hidden'
            : ''
        }
      >
        <div className="shell pt-24 sm:pt-32 lg:pt-24">
          <SectionHead index="04" label="En planta" tone="light" />

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 lg:mt-9">
            <h2 className="display text-[clamp(2.15rem,4.4vw,3.8rem)]">
              Trabajo real,
              <br />
              <span className="serif-accent text-flame">en planta.</span>
            </h2>
            <div className="flex items-center gap-4 pb-2">
              <span className="font-mono text-[11px] tracking-[0.2em] text-bone/50">
                {String(current).padStart(2, '0')}
              </span>
              <span className="h-px w-10 bg-white/20" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-bone/25">
                {String(gallery.length).padStart(2, '0')}
              </span>
              <span className="hidden items-center gap-2 pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/30 lg:flex">
                Desliza <ArrowUpRight className="size-3" />
              </span>
            </div>
          </div>

          <div className="mt-9 hidden h-px w-full bg-white/10 lg:block">
            <motion.div
              className="h-px w-full origin-left bg-flame"
              style={reduce ? { width: '100%' } : { scaleX: progress }}
            />
          </div>
        </div>

        {/* Desktop: horizontal scroll driven by vertical scroll */}
        <div className={horizontal ? 'hidden lg:mt-10 lg:block' : 'hidden'}>
          <motion.div
            ref={trackRef}
            style={reduce ? undefined : { x }}
            className="flex gap-5 pl-12 pr-12"
          >
            {gallery.map((item, index) => (
              <figure
                key={item.src}
                className="group relative w-[26vw] shrink-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-ink-3">
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full scale-[1.01] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-bone/80 backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="mt-3 flex items-start justify-between gap-4">
                  <span className="max-w-[22ch] text-[13px] leading-snug text-bone/60">
                    {item.caption}
                  </span>
                  <span className="font-mono text-[10px] text-bone/25">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        {/* Mobile / reduced motion: vertical grid */}
        <div
          className={`shell mt-12 grid grid-cols-2 gap-x-4 gap-y-8 pb-20 sm:gap-6 ${
            horizontal ? 'lg:hidden' : 'lg:grid-cols-4'
          }`}
        >
          {gallery.map((item, index) => (
            <figure key={item.src} className={`group ${index % 3 === 0 ? 'col-span-2' : ''}`}>
              <div
                className={`relative overflow-hidden rounded-[3px] bg-ink-3 ${
                  index % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-ink/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-bone/80 backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <figcaption className="mt-2 text-[12px] leading-snug text-bone/55">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
