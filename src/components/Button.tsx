import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'flame' | 'outline' | 'light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-3 rounded-full text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300'

const sizes: Record<Size, string> = {
  sm: 'px-5 py-3',
  md: 'px-6 py-4 sm:px-7',
  lg: 'px-7 py-4 sm:px-8 sm:py-5 text-[12px]',
}

const variants: Record<Variant, string> = {
  flame: 'bg-flame text-ink hover:bg-bone',
  outline: 'border border-white/20 text-bone hover:border-white/40 hover:bg-white/5',
  light: 'bg-bone text-ink hover:bg-flame',
  ghost: 'text-bone hover:text-flame',
}

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  icon?: boolean
  target?: string
  ariaLabel?: string
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href,
  onClick,
  variant = 'flame',
  size = 'md',
  className = '',
  icon = true,
  target,
  ariaLabel,
  type = 'button',
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="size-[15px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  )

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target ?? (external ? '_blank' : undefined)}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
