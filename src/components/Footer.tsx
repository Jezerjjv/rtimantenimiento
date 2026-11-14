import { ArrowUp } from 'lucide-react'
import { Logo } from './Logo'
import { navLinks, services, site } from '../data/site'
import { scrollToId, scrollToTop } from '../lib/scroll'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="shell relative z-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <button type="button" onClick={scrollToTop} aria-label="Ir al inicio" className="text-bone">
              <Logo />
            </button>
            <p className="mt-6 max-w-[38ch] text-[13.5px] leading-relaxed text-bone/45">
              Servicios de mantenimiento industrial, mecanizado y montajes para plantas que no pueden
              detenerse. {site.legal}.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-bone/25">
              {site.address}
              <br />
              {site.city} — {site.country}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/30">Servicios</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId('servicios')}
                    className="text-left text-[13px] text-bone/55 transition-colors hover:text-flame"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/30">Empresa</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(link.id)}
                    className="text-[13px] text-bone/55 transition-colors hover:text-flame"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('contacto')}
                  className="text-[13px] text-bone/55 transition-colors hover:text-flame"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a
                  href={site.portfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13px] text-bone/55 transition-colors hover:text-flame"
                >
                  Portafolio (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/30">
              Directo
            </h3>
            <ul className="mt-5 space-y-2.5">
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="text-[13px] text-bone/55 transition-colors hover:text-flame"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              {site.emails.map((email) => (
                <li key={email.address}>
                  <a
                    href={`mailto:${email.address}`}
                    className="break-all text-[13px] text-bone/55 transition-colors hover:text-flame"
                  >
                    {email.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone/25">
            © {year} {site.name} Ltda. — Todos los derechos reservados
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a
              href="https://jezer.es"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Diseño por Jezer — jezer.es"
              className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-bone/35 transition-colors hover:text-bone/70"
            >
              <span>design by</span>
              <span className="relative text-bone/60 transition-colors group-hover:text-flame">
                jezer
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-current opacity-40 transition-opacity group-hover:opacity-100" />
              </span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-bone/35 transition-colors hover:text-bone"
            >
              Volver arriba
              <span className="grid size-7 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-flame group-hover:text-flame">
                <ArrowUp className="size-3" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <span className="display block translate-y-[26%] text-center text-[26vw] leading-[0.72] text-bone/[0.04]">
          RTI
        </span>
      </div>
    </footer>
  )
}
