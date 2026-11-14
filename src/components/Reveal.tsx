import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE } from '../lib/ease'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, y = 26, once = true }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

type WordRevealProps = {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
}: WordRevealProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return <span className={`${className ?? ''} ${wordClassName ?? ''}`}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]"
          aria-hidden
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ''}`}
            variants={{
              hidden: { y: '112%', rotate: 2 },
              show: { y: '0%', rotate: 0, transition: { duration: 1.15, ease: EASE } },
            }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
