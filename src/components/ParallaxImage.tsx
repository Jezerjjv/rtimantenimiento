import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  strength?: number
  priority?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  strength = 7,
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={reduce ? undefined : { y }}
        className={`h-[118%] w-full -translate-y-[8%] object-cover ${imgClassName}`}
      />
    </div>
  )
}
