"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number>(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementHeight = element.offsetHeight

        const scrolled = windowHeight - rect.top
        const total = elementHeight + windowHeight
        const rawProgress = scrolled / total

        setProgress(Math.min(Math.max(rawProgress, 0), 1))
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [ref])

  return progress
}
