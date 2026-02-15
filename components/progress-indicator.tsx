"use client"

import { useEffect, useState } from "react"

const scenes = [
  "Вызов",
  "Проблема",
  "Решение",
  "Сравнение",
  "Экономика",
  "Клиенты",
  "Старт",
]

export function ProgressIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / docHeight
      setScrollPercent(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const activeScene = Math.min(
    Math.floor(scrollPercent * scenes.length),
    scenes.length - 1
  )

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-[#0A261D]/50">
        <div
          className="h-full bg-[#CCFF00] transition-all duration-150"
          style={{ width: `${scrollPercent * 100}%` }}
        />
      </div>

      {/* Side dots - hidden on mobile */}
      <nav
        className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
        aria-label="Scene navigation"
      >
        {scenes.map((scene, i) => {
          const isActive = i === activeScene
          const isPast = i < activeScene
          return (
            <div key={i} className="flex items-center gap-2">
              {isActive && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#CCFF00]/70">
                  {scene}
                </span>
              )}
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 12 : 6,
                  height: isActive ? 12 : 6,
                  backgroundColor: isActive
                    ? "#CCFF00"
                    : isPast
                      ? "rgba(204,255,0,0.3)"
                      : "rgba(248,245,242,0.15)",
                  boxShadow: isActive
                    ? "0 0 10px rgba(204,255,0,0.4)"
                    : "none",
                }}
              />
            </div>
          )
        })}
      </nav>
    </>
  )
}
