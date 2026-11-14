import { Marquee } from './Marquee'

const capabilities = [
  'Mantenimiento industrial',
  'Mantenimiento eléctrico',
  'Mecanizado y torno',
  'Montajes industriales',
  'Andamios certificados',
  'Paradas de planta',
]

export function Capabilities() {
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-flame py-4 text-ink sm:py-5">
      <Marquee
        items={capabilities}
        duration={58}
        className="text-[clamp(1.15rem,2.2vw,1.8rem)]"
        itemClassName="display"
      />
    </div>
  )
}
