import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { strengths } from '../data/site'

export function Approach() {
  return (
    <section id="enfoque" className="bg-bone py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="04" label="Enfoque" />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.15rem,5vw,4.4rem)]">
              Cuatro razones
              <br />
              <span className="serif-accent text-ember">para elegirnos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-ink/55">
              Calidad, seguridad y cumplimiento normativo en cada proyecto: eso es lo que sostiene
              nuestro trabajo.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-ink/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal
              key={item.number}
              delay={0.06 * index}
              className="group relative border-b border-ink/10 sm:border-r lg:border-b-0"
            >
              <div className="relative flex h-full min-h-[240px] flex-col justify-between gap-10 overflow-hidden p-6 transition-colors duration-500 hover:bg-ink hover:text-bone sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] w-0 bg-flame transition-all duration-500 group-hover:w-full" />
                <div>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-ember">
                    {item.number}
                  </span>
                  <h3 className="display mt-5 text-[clamp(1.3rem,2vw,1.7rem)]">{item.title}</h3>
                </div>
                <p className="max-w-[32ch] text-[13.5px] leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-bone/60">
                  {item.text}
                </p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 size-4 text-ink/20 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
