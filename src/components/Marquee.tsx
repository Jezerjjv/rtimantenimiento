type MarqueeProps = {
  items: string[]
  reverse?: boolean
  duration?: number
  className?: string
  itemClassName?: string
  separator?: string
}

export function Marquee({
  items,
  reverse = false,
  duration = 42,
  className = '',
  itemClassName = '',
  separator = '✳',
}: MarqueeProps) {
  const column = (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className={`whitespace-nowrap ${itemClassName}`}>{item}</span>
          <span
            aria-hidden="true"
            className="mx-6 text-[0.45em] opacity-40 sm:mx-10"
          >
            {separator}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`relative flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {column}
        {column}
      </div>
    </div>
  )
}
