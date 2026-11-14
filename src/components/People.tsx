import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { ParallaxImage } from './ParallaxImage'
import { people } from '../data/site'

const tags = ['Equipo profesional y técnico', 'Procedimientos seguros por actividad', 'EPP por tarea']

export function People() {
  return (
    <section id="gente" className="border-t border-ink/10 bg-bone-2 py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="02" label="Nuestra gente" />

        <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src="/img/section.webp"
                alt="Equipo técnico de R.T.I con equipo de protección personal en planta"
                className="aspect-[4/5] w-full rounded-[3px]"
                strength={6}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  Personal en planta
                </span>
                <span className="max-w-[26ch] text-right text-[12px] leading-snug text-ink/55">
                  Profesionales y técnicos con experiencia en mantenimiento y montaje.
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-[clamp(2.05rem,4.4vw,3.9rem)]">
                Profesionales y técnicos
                <br />
                <span className="serif-accent text-ember">con experiencia en planta.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-9 max-w-[46ch] font-serif text-[clamp(1.3rem,2vw,1.75rem)] leading-[1.32] text-ink/80">
                {people.lead}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-6 text-[14.5px] leading-relaxed text-ink/65 sm:grid-cols-2">
              {people.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.08 + index * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
