export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-7 shrink-0 text-flame" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <circle cx="16" cy="16" r="7.6" />
          <path d="M16 2.4v4.2M16 25.4v4.2M2.4 16h4.2M25.4 16h4.2M6.5 6.5l3 3M22.5 22.5l3 3M25.5 6.5l-3 3M9.5 22.5l-3 3" />
        </g>
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      </svg>
      <span className="leading-none">
        <span className="block text-[17px] font-semibold tracking-[-0.02em]">RTI</span>
        <span className="mt-1 block font-mono text-[7.5px] tracking-[0.3em] opacity-50">
          MANTENIMIENTO
        </span>
      </span>
    </span>
  )
}
