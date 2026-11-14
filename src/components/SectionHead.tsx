type Tone = 'dark' | 'light'

export function SectionHead({
  index,
  label,
  tone = 'dark',
  className = '',
}: {
  index: string
  label: string
  tone?: Tone
  className?: string
}) {
  const line = tone === 'dark' ? 'bg-ink/15' : 'bg-white/15'
  const text = tone === 'dark' ? 'text-ink/45' : 'text-bone/45'

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className={`font-mono text-[10px] tracking-[0.2em] ${text}`}>{index}</span>
      <span className={`h-px flex-1 ${line}`} />
      <span className={`eyebrow ${text}`}>{label}</span>
    </div>
  )
}
