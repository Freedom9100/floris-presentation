"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { AlertTriangle, MessageSquare, MapPin, Clock, Percent } from "lucide-react"

const chaosItems = [
  { text: "Flowwow -20%", icon: Percent, x: -30, y: -20 },
  { text: "WhatsApp (99+)", icon: MessageSquare, x: 25, y: -35 },
  { text: "Где мой заказ?", icon: Clock, x: -35, y: 15 },
  { text: "Адрес?", icon: MapPin, x: 30, y: 25 },
  { text: "Ответьте!", icon: AlertTriangle, x: -15, y: -40 },
  { text: "Перевод на карту?", icon: MessageSquare, x: 20, y: 40 },
  { text: "Уточните цену", icon: AlertTriangle, x: -40, y: 0 },
  { text: "Ошибка в адресе!", icon: MapPin, x: 35, y: -10 },
]

export function SceneChaos() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const animProgress = Math.min(Math.max((progress - 0.15) / 0.6, 0), 1)
  const cloudProgress = Math.min(Math.max((progress - 0.75) / 0.25, 0), 1)

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #0f1a15 0%, #0A261D 80%)",
          }}
        />

        {/* Section title */}
        <div
          className="relative z-20 mb-12 text-center"
          style={{
            opacity: Math.min(animProgress * 3, 1),
            transform: `translateY(${(1 - Math.min(animProgress * 3, 1)) * 30}px)`,
          }}
        >
          <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl lg:text-6xl">
            <span className="text-balance">
              {"Почему вы "}
              <span className="text-[#FBCFE8]">{"теряете деньги"}</span>
              {" сейчас?"}
            </span>
          </h2>
        </div>

        {/* Chaos bubble cloud */}
        <div className="relative z-10 flex h-[400px] w-full max-w-3xl items-center justify-center">
          {chaosItems.map((item, i) => {
            const delay = i * 0.1
            const itemProgress = Math.min(
              Math.max((animProgress - delay) / 0.4, 0),
              1
            )
            const Icon = item.icon

            // During cloud phase, items converge
            const cloudX = item.x * (1 - cloudProgress * 0.7)
            const cloudY = item.y * (1 - cloudProgress * 0.7)

            return (
              <div
                key={i}
                className="absolute flex items-center gap-2 rounded-xl border border-[#F8F5F2]/10 bg-[#0A261D]/80 px-4 py-3 shadow-lg backdrop-blur-sm"
                style={{
                  opacity: itemProgress,
                  transform: `translate(${cloudX}%, ${cloudY}%) scale(${0.8 + itemProgress * 0.2})`,
                  left: `${50 + item.x}%`,
                  top: `${50 + item.y}%`,
                  marginLeft: "-80px",
                  marginTop: "-20px",
                }}
              >
                <Icon className="h-4 w-4 shrink-0 text-[#CCFF00]" />
                <span className="whitespace-nowrap font-mono text-xs text-[#F8F5F2]/90 md:text-sm">
                  {item.text}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom stats */}
        <div
          className="relative z-20 mt-8 flex flex-col items-center gap-6 px-4 md:flex-row md:gap-12"
          style={{
            opacity: Math.min(Math.max((animProgress - 0.4) / 0.3, 0), 1),
            transform: `translateY(${(1 - Math.min(Math.max((animProgress - 0.4) / 0.3, 0), 1)) * 20}px)`,
          }}
        >
          {[
            { figure: "20%", label: "комиссии агрегаторов съедают маржу" },
            { figure: "70%", label: "времени флористов уходит на переписки" },
            { figure: "2 мин", label: "и клиент уходит к конкуренту" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="font-mono text-3xl font-bold text-[#CCFF00] md:text-4xl">
                {stat.figure}
              </span>
              <span className="max-w-[180px] font-sans text-sm text-[#F8F5F2]/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
