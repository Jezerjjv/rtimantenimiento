import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { clients } from '../data/site'

export function Clients() {
  return (
    <section className="bg-ink-2 py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHead index="07" label="Clientes" tone="light" />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.05rem,4.6vw,4rem)]">
              Han confiado
              <br />
              <span className="serif-accent text-flame">en nuestro trabajo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-bone/50">
              Empresas de los sectores energético, minero, cementero y de manufactura, con operación
              continua y altos estándares de seguridad.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-white/10">
          {clients.map((client, index) => (
            <Reveal key={client} delay={0.04 * index}>
              <div className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-5 transition-colors duration-500 hover:border-white/25 sm:py-6">
                <span className="w-8 shrink-0 font-mono text-[10px] tracking-[0.2em] text-bone/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="display flex-1 text-[clamp(1.5rem,3.4vw,2.5rem)] text-bone/75 transition-all duration-500 group-hover:translate-x-1 group-hover:text-flame">
                  {client}
                </span>
                <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-bone/20 transition-colors duration-500 group-hover:text-bone/50">
                  Cliente
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
