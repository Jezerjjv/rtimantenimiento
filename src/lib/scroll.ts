import type Lenis from 'lenis'

let instance: Lenis | null = null

export function setSmoothScroll(next: Lenis | null) {
  instance = next
}

export function scrollToId(id: string, offset = -72) {
  const el = document.getElementById(id)
  if (!el) return

  if (instance) {
    instance.scrollTo(el, { offset, duration: 1.5 })
    return
  }

  const top = el.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToTop() {
  if (instance) {
    instance.scrollTo(0, { duration: 1.4 })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function lockScroll() {
  instance?.stop()
  document.documentElement.style.overflow = 'hidden'
}

export function unlockScroll() {
  instance?.start()
  document.documentElement.style.removeProperty('overflow')
}
