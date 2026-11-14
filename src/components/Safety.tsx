import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { ParallaxImage } from './ParallaxImage'
import { certifications, safetyPolicy } from '../data/site'

export function Safety() {
  return (
    <section id="seguridad" className="bg-bone-2 py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="06" label="Seguridad" />

        <div className="mt-10 grid gap-x-14 gap-y-12 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="display text-[clamp(2.05rem,4.6vw,4rem)]">
                La seguridad
                <br />
                <span className="serif-accent text-ember">no es negociable.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-8 text-[15px] leading-relaxed text-ink/70">{safetyPolicy.intro}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 border-l-2 border-flame pl-5 font-serif text-[clamp(1.15rem,1.7vw,1.45rem)] leading-[1.35] text-ink/75">
                {safetyPolicy.closing}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <ParallaxImage
                src="/img/torch.webp"
                alt="Operario de R.T.I con equipo de protección personal durante un trabajo en planta"
                className="aspect-[4/5] w-full rounded-[3px] sm:aspect-[5/4] lg:aspect-[4/5]"
                strength={6}
              />
            </Reveal>
            <Reveal delay={0.08} className="mt-5 flex items-start justify-between gap-6">
              <p className="max-w-[34ch] text-[12px] leading-snug text-ink/45">
                Procedimientos seguros por actividad y elementos de protección personal adecuados
                para cada necesidad.
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                EPP · Permisos
              </span>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-ink/10 pt-12">
          <Reveal>
            <span className="eyebrow text-ink/40">Política de seguridad, salud en el trabajo y ambiente</span>
          </Reveal>

          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {safetyPolicy.principles.map((principle, index) => (
              <Reveal key={principle} delay={0.04 * index}>
                <div className="flex gap-4 border-t border-ink/10 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-ember">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-ink/65">{principle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.code}
              delay={0.05 * index}
              className="border-b border-ink/10 sm:border-r lg:border-b-0"
            >
              <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-7">
                <span className="display text-[clamp(1.5rem,2.4vw,2rem)] text-ember">{cert.code}</span>
                <span className="max-w-[22ch] text-[12px] leading-snug text-ink/50">{cert.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
