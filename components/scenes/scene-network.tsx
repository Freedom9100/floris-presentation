"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { Bell, Users, Settings, Send, Gift, Repeat } from "lucide-react"

const clients = [
  { angle: 0, label: "Мария", icon: Users },
  { angle: 60, label: "Алексей", icon: Users },
  { angle: 120, label: "Елена", icon: Users },
  { angle: 180, label: "Дмитрий", icon: Users },
  { angle: 240, label: "Анна", icon: Users },
  { angle: 300, label: "Сергей", icon: Users },
]

const notifications = [
  { text: "Пора заказать розы для мамы", icon: Gift, x: 65, y: 15 },
  { text: "Скидка 10% только для вас", icon: Bell, x: 15, y: 70 },
  { text: "Ваш заказ доставлен!", icon: Send, x: 75, y: 75 },
]

const features = [
  { icon: Send, title: "Бесплатные рассылки", desc: "Перед праздниками" },
  { icon: Bell, title: "Авто-напоминания", desc: "О важных датах" },
  { icon: Repeat, title: "Повторные продажи", desc: "Без затрат на рекламу" },
  { icon: Settings, title: "Управление в 2 клика", desc: "Витрина и заказы" },
]

export function SceneNetwork() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const animProgress = Math.min(Math.max((progress - 0.15) / 0.6, 0), 1)
  const pulsePhase = animProgress * Math.PI * 4
  const notifProgress = Math.min(Math.max((animProgress - 0.4) / 0.3, 0), 1)
  const featuresProgress = Math.min(Math.max((animProgress - 0.6) / 0.3, 0), 1)

  const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 100 : 160

  return (
    <section ref={sectionRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
          }}
        />

        {/* Title */}
        <div
          className="relative z-20 mb-8 px-4 text-center md:mb-12"
          style={{
            opacity: Math.min(animProgress * 3, 1),
            transform: `translateY(${(1 - Math.min(animProgress * 3, 1)) * 20}px)`,
          }}
        >
          <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl">
            <span className="text-balance">
              {"Ваша база клиентов — ваш "}
              <span className="text-[#FBCFE8]">{"главный актив"}</span>
            </span>
          </h2>
        </div>

        {/* Network visualization */}
        <div className="relative z-10 flex h-[350px] w-[350px] items-center justify-center md:h-[420px] md:w-[420px]">
          {/* Center phone */}
          <div className="absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-[#CCFF00]/30 bg-[#0A261D] shadow-lg md:h-20 md:w-20">
            <span className="font-serif text-lg font-bold text-[#CCFF00] md:text-xl">
              {"F"}
            </span>
            {/* Pulse rings */}
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-2xl border border-[#CCFF00]"
                style={{
                  inset: -ring * 15,
                  opacity:
                    Math.sin(pulsePhase - ring * 0.5) * 0.15 + 0.05,
                  transition: "opacity 0.1s",
                }}
              />
            ))}
          </div>

          {/* Client nodes */}
          {clients.map((client, i) => {
            const rad = (client.angle * Math.PI) / 180
            const x = Math.cos(rad) * radius
            const y = Math.sin(rad) * radius
            const delay = i * 0.08
            const nodeProgress = Math.min(
              Math.max((animProgress - delay) / 0.4, 0),
              1
            )
            const Icon = client.icon

            return (
              <div key={i} className="absolute" style={{ left: "50%", top: "50%" }}>
                {/* Connection line */}
                <svg
                  className="absolute"
                  style={{
                    left: 0,
                    top: 0,
                    overflow: "visible",
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke="#CCFF00"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity={nodeProgress * 0.3}
                  />
                </svg>
                {/* Node */}
                <div
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    transform: `translate(${x - 20}px, ${y - 20}px)`,
                    opacity: nodeProgress,
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F8F5F2]/15 bg-[#0A261D]/80">
                    <Icon className="h-4 w-4 text-[#FBCFE8]" />
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] text-[#F8F5F2]/50">
                    {client.label}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Floating notifications */}
          {notifications.map((notif, i) => {
            const delay = i * 0.15
            const nProgress = Math.min(
              Math.max((notifProgress - delay) / 0.5, 0),
              1
            )
            const Icon = notif.icon
            return (
              <div
                key={i}
                className="absolute flex items-center gap-2 rounded-lg border border-[#CCFF00]/20 bg-[#0A261D]/90 px-3 py-2 shadow-lg backdrop-blur-sm"
                style={{
                  left: `${notif.x}%`,
                  top: `${notif.y}%`,
                  opacity: nProgress,
                  transform: `translateY(${(1 - nProgress) * 15}px) scale(${0.9 + nProgress * 0.1})`,
                }}
              >
                <Icon className="h-3 w-3 shrink-0 text-[#CCFF00]" />
                <span className="whitespace-nowrap font-sans text-[10px] text-[#F8F5F2]/80 md:text-xs">
                  {notif.text}
                </span>
              </div>
            )
          })}
        </div>

        {/* Features grid */}
        <div
          className="relative z-20 mt-8 grid max-w-3xl grid-cols-2 gap-3 px-4 md:mt-12 md:grid-cols-4 md:gap-4"
          style={{
            opacity: featuresProgress,
            transform: `translateY(${(1 - featuresProgress) * 30}px)`,
          }}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-xl border border-[#F8F5F2]/10 bg-[#0A261D]/60 p-4 text-center backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CCFF00]/10">
                  <Icon className="h-5 w-5 text-[#CCFF00]" />
                </div>
                <span className="font-sans text-xs font-medium text-[#F8F5F2]/90 md:text-sm">
                  {feat.title}
                </span>
                <span className="font-sans text-[10px] text-[#F8F5F2]/50 md:text-xs">
                  {feat.desc}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
