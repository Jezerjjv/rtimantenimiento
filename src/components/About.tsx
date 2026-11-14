import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'
import { ParallaxImage } from './ParallaxImage'

const stats = [
  { value: '7', label: 'Líneas de servicio' },
  { value: '4', label: 'Normas y certificaciones' },
  { value: '360°', label: 'Soluciones integrales' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-bone py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHead index="01" label="Quiénes somos" />

        <div className="mt-10 grid gap-x-14 gap-y-14 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-[clamp(2.05rem,4.6vw,4rem)]">
                No solo reparamos equipos.
                <br />
                <span className="serif-accent text-ember">Sostenemos tu operación.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 text-[15px] leading-relaxed text-ink/70 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <p>
                  R.T.I Mantenimiento Ltda. — Recursos Técnicos Industriales Ltda. — es una empresa de
                  servicios que ofrece a sus clientes soluciones profesionales en todos los campos del
                  mantenimiento industrial, fabricaciones y reparaciones de maquinaria.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Ofrecemos soluciones integrales para el sector industrial, enfocadas en calidad,
                  seguridad y cumplimiento normativo: mantenimiento mecánico y eléctrico, fabricación,
                  mecanizado, montajes y suministro de personal.
                </p>
              </Reveal>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.05 * index}>
                  <div className="flex items-baseline gap-3 sm:block">
                    <dt className="display text-[3.4rem] leading-none text-ember">{stat.value}</dt>
                    <dd className="mt-2 max-w-[18ch] text-[12px] uppercase leading-snug tracking-[0.12em] text-ink/50">
                      {stat.label}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <Reveal className="relative">
              <ParallaxImage
                src="/img/scaffold.webp"
                alt="Montaje de estructura metálica con andamios certificados"
                className="aspect-[4/5] w-full rounded-[3px]"
                strength={6}
              />
              <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                  Andamios certificados
                </span>
                <span className="max-w-[26ch] text-right text-[12px] leading-snug text-ink/55">
                  Estructuras, plataformas y trabajos en altura con procedimiento propio.
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <span className="eyebrow text-ink/40">Misión</span>
            <p className="mt-5 font-serif text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.3] text-ink/85">
              Ofrecer excelentes servicios a nuestros clientes con rapidez y calidad en nuestros
              trabajos.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow text-ink/40">Visión</span>
            <p className="mt-5 font-serif text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.3] text-ink/85">
              Ser una empresa líder, enfocada en los más altos estándares de calidad, seguridad,
              productividad y competitividad en el mantenimiento industrial, que nos permita
              convertirnos en la mejor alternativa de la región.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
