"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const scenes = [
  { id: "wakeup", label: "Вызов" },
  { id: "chaos", label: "Проблема" },
  { id: "core", label: "Решение" },
  { id: "efficiency", label: "Сравнение" },
  { id: "receipt", label: "Экономика" },
  { id: "network", label: "Клиенты" },
  { id: "close", label: "Старт" },
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
    handleScroll()
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
        <motion.div
          className="h-full bg-[#CCFF00]"
          initial={{ width: 0 }}
          style={{ width: `${scrollPercent * 100}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>

      {/* Side navigation dots - clickable anchors */}
      <nav
        className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
        aria-label="Scene navigation"
      >
        {scenes.map((scene, i) => {
          const isActive = i === activeScene
          const isPast = i < activeScene
          return (
            <motion.a
              key={i}
              href={`#${scene.id}`}
              className="flex items-center gap-2 group cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {isActive && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#CCFF00]/70">
                  {scene.label}
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
            </motion.a>
          )
        })}
      </nav>
    </>
  )
}
