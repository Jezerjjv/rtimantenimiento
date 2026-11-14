import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionHead } from './SectionHead'
import { Reveal } from './Reveal'
import { Button } from './Button'
import { site } from '../data/site'

const fields = [
  {
    name: 'nombre',
    label: 'Nombre',
    placeholder: 'Cómo te llamas',
    type: 'text',
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'empresa',
    label: 'Empresa',
    placeholder: 'Nombre de la empresa',
    type: 'text',
    required: false,
    autoComplete: 'organization',
  },
  {
    name: 'contacto',
    label: 'Teléfono o correo',
    placeholder: 'Para responderte',
    type: 'text',
    required: true,
    autoComplete: 'tel',
  },
] as const

export function Contact() {
  const [form, setForm] = useState({ nombre: '', empresa: '', contacto: '', mensaje: '' })

  const update = (name: string, value: string) => setForm((prev) => ({ ...prev, [name]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = [
      `Hola R.T.I, soy ${form.nombre || '—'}.`,
      form.empresa ? `Empresa: ${form.empresa}.` : '',
      form.contacto ? `Contacto: ${form.contacto}.` : '',
      '',
      form.mensaje || 'Quisiera más información sobre sus servicios.',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/3 top-1/3 size-[70vh] rounded-full bg-flame/10 blur-[120px]"
      />

      <div className="shell relative">
        <SectionHead index="08" label="Contacto" tone="light" />

        <div className="mt-10 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="display text-[clamp(2.4rem,5.6vw,4.7rem)]">
                Tu planta
                <br />
                no puede
                <br />
                <span className="serif-accent text-flame">esperar.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-bone/60">
                Cuéntanos qué equipo está fallando o qué montaje tienes en camino. Coordinamos una
                visita técnica y entregamos una propuesta clara: alcance, tiempos y seguridad.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                <div className="flex items-start justify-between gap-6 py-5">
                  <span className="flex items-center gap-4 pt-0.5">
                    <Phone className="size-4 text-flame" strokeWidth={1.6} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/35">
                      Teléfonos
                    </span>
                  </span>
                  <div className="flex flex-col items-end gap-1.5">
                    {site.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="text-[14px] text-bone/85 transition-colors hover:text-flame"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 py-5">
                  <span className="flex items-center gap-4 pt-0.5">
                    <Mail className="size-4 text-flame" strokeWidth={1.6} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/35">
                      Correo
                    </span>
                  </span>
                  <div className="flex flex-col items-end gap-1.5">
                    {site.emails.map((email) => (
                      <a
                        key={email.address}
                        href={`mailto:${email.address}`}
                        className="break-all text-right text-[13px] text-bone/85 transition-colors hover:text-flame"
                      >
                        {email.address}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span className="flex items-center gap-4">
                    <MapPin className="size-4 text-flame" strokeWidth={1.6} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/35">
                      Dirección
                    </span>
                  </span>
                  <span className="max-w-[26ch] text-right text-[13.5px] leading-snug text-bone/70 transition-colors group-hover:text-flame">
                    {site.address}, {site.city}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/30">
                Contacto directo: {site.contactName}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[4px] border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-flame">
                  Cuéntanos tu necesidad
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-bone/90 sm:text-[28px]">
                  Escríbenos y te contactamos.
                </h3>

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field.name} className={field.name === 'empresa' ? 'sm:col-span-1' : ''}>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40">
                        {field.label}
                        {field.required ? ' *' : ''}
                      </span>
                      <input
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        autoComplete={field.autoComplete}
                        value={form[field.name]}
                        onChange={(event) => update(field.name, event.target.value)}
                        placeholder={field.placeholder}
                        className="mt-2 w-full border-b border-white/15 bg-transparent py-2.5 text-[14px] text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-flame"
                      />
                    </label>
                  ))}

                  <label className="sm:col-span-2">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40">
                      ¿Qué necesitas? *
                    </span>
                    <textarea
                      name="mensaje"
                      required
                      rows={3}
                      value={form.mensaje}
                      onChange={(event) => update('mensaje', event.target.value)}
                      placeholder="Equipo, falla, montaje o parada de planta…"
                      className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-2.5 text-[14px] text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-flame"
                    />
                  </label>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" variant="flame" size="md" className="justify-center">
                    Enviar por WhatsApp
                  </Button>
                  <a
                    href={`mailto:${site.email}?subject=Cotizaci%C3%B3n%20R.T.I`}
                    className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-bone/35 underline-offset-4 transition-colors hover:text-bone/70 sm:text-left"
                  >
                    o escríbenos por correo
                  </a>
                </div>

                <p className="mt-6 border-t border-white/10 pt-4 text-[11px] leading-relaxed text-bone/30">
                  Al enviar se abrirá WhatsApp con el mensaje listo para enviar. No almacenamos datos
                  en este sitio.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
