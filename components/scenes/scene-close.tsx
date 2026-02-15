"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { ArrowRight } from "lucide-react"

// Floating petal component
function Petal({
  x,
  y,
  size,
  delay,
  progress,
}: {
  x: number
  y: number
  size: number
  delay: number
  progress: number
}) {
  const petalProgress = Math.min(Math.max((progress - delay) / 0.5, 0), 1)
  const floatY = Math.sin((progress * 10 + delay * 5) * Math.PI) * 15

  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size * 1.3,
        background: `radial-gradient(ellipse at center, rgba(251,207,232,${petalProgress * 0.7}) 0%, rgba(251,207,232,${petalProgress * 0.2}) 100%)`,
        boxShadow: `0 0 ${size}px rgba(251,207,232,${petalProgress * 0.3})`,
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        transform: `translateY(${floatY}px) rotate(${delay * 100 + progress * 60}deg)`,
        opacity: petalProgress,
      }}
    />
  )
}

const petals = [
  { x: 10, y: 20, size: 12, delay: 0 },
  { x: 85, y: 15, size: 10, delay: 0.05 },
  { x: 20, y: 75, size: 14, delay: 0.1 },
  { x: 75, y: 80, size: 11, delay: 0.08 },
  { x: 50, y: 10, size: 9, delay: 0.12 },
  { x: 30, y: 45, size: 13, delay: 0.03 },
  { x: 70, y: 50, size: 10, delay: 0.07 },
  { x: 15, y: 55, size: 11, delay: 0.15 },
  { x: 90, y: 40, size: 8, delay: 0.02 },
  { x: 45, y: 85, size: 12, delay: 0.11 },
  { x: 60, y: 25, size: 9, delay: 0.06 },
  { x: 5, y: 90, size: 10, delay: 0.13 },
]

export function SceneClose() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const animProgress = Math.min(Math.max((progress - 0.15) / 0.6, 0), 1)
  // Bg transition from emerald to black
  const bgDarkness = animProgress
  const ctaProgress = Math.min(Math.max((animProgress - 0.3) / 0.4, 0), 1)

  return (
    <section ref={sectionRef} className="relative" style={{ height: "250vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Transitioning background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(${15 - bgDarkness * 15}, ${51 - bgDarkness * 51}, ${40 - bgDarkness * 40}, 1) 0%, 
              rgba(${10 - bgDarkness * 10}, ${38 - bgDarkness * 38}, ${29 - bgDarkness * 29}, 1) 70%)`,
          }}
        />

        {/* Floating petals */}
        {petals.map((petal, i) => (
          <Petal key={i} {...petal} progress={animProgress} />
        ))}

        {/* Content */}
        <div
          className="relative z-20 flex flex-col items-center gap-8 px-4 text-center"
          style={{
            opacity: ctaProgress,
            transform: `translateY(${(1 - ctaProgress) * 40}px)`,
          }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#CCFF00]">
            {"Готовы начать?"}
          </p>

          <h2 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-[#F8F5F2] md:text-6xl lg:text-7xl">
            <span className="text-balance">
              {"Готовы забрать свою "}
              <span className="text-[#CCFF00]">{"прибыль"}</span>
              {" назад?"}
            </span>
          </h2>

          <p className="max-w-xl font-sans text-base text-[#F8F5F2]/60 md:text-lg">
            {"Мы запустим ваш магазин 'под ключ' за несколько дней. Полная настройка оплаты и витрины. Обучение персонала."}
          </p>

          {/* CTA button */}
          <button
            className="group mt-4 flex items-center gap-3 rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] px-8 py-4 font-sans text-lg font-bold text-[#0A261D] shadow-lg transition-all hover:bg-[#CCFF00]/90 md:px-12 md:py-5 md:text-xl"
            style={{
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          >
            {"Забрать свою прибыль"}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6" />
          </button>

          {/* Sub-offers */}
          <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <div className="flex items-center gap-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#CCFF00]" />
              <span className="font-sans text-sm text-[#F8F5F2]/70">
                {"Запуск за несколько дней"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#FBCFE8]/20 bg-[#FBCFE8]/5 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-[#FBCFE8]" />
              <span className="font-sans text-sm text-[#F8F5F2]/70">
                {"Начните продавать к ближайшему празднику"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom logo */}
        <div
          className="absolute bottom-8 z-20"
          style={{ opacity: ctaProgress * 0.5 }}
        >
          <span className="font-serif text-lg tracking-wider text-[#F8F5F2]/20">
            {"FLORIS"}
          </span>
        </div>
      </div>
    </section>
  )
}
