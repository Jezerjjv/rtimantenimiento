import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { processSteps } from '../data/site'

export function Process() {
  return (
    <section id="proceso" className="bg-bone py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="03" label="Cómo trabajamos" />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.15rem,5vw,4.4rem)]">
              Un método claro,
              <br />
              <span className="serif-accent text-ember">sin sorpresas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-ink/55">
              De la primera visita al informe final. El mismo proceso para un rodamiento o para una
              parada de planta completa.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-ink/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.06 * index}
              className="group relative border-b border-ink/10 sm:border-r lg:border-b-0"
            >
              <div className="relative flex h-full min-h-[240px] flex-col justify-between gap-10 overflow-hidden p-6 transition-colors duration-500 hover:bg-ink hover:text-bone sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[2px] w-0 bg-flame transition-all duration-500 group-hover:w-full" />
                <div>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-ember">
                    {step.number}
                  </span>
                  <h3 className="display mt-5 text-[clamp(1.4rem,2.2vw,1.9rem)]">{step.title}</h3>
                </div>
                <p className="max-w-[30ch] text-[13.5px] leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-bone/60">
                  {step.text}
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
