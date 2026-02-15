"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function SceneReceipt() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const animProgress = Math.min(Math.max((progress - 0.15) / 0.6, 0), 1)
  // Receipt slides up from bottom
  const receiptY = (1 - animProgress) * 100
  // Commission line animation
  const strikeProgress = Math.min(Math.max((animProgress - 0.4) / 0.3, 0), 1)
  // Savings reveal
  const savingsProgress = Math.min(Math.max((animProgress - 0.6) / 0.3, 0), 1)

  const receiptLines = [
    { label: "Средний чек", value: "4 000 P", type: "normal" as const },
    { label: "Заказов в день", value: "x10", type: "normal" as const },
    { label: "Дней в месяце", value: "x30", type: "normal" as const },
    { label: "Комиссия агрегатора", value: "-20%", type: "strike" as const },
    { label: "Потеря в месяц", value: "-240 000 P", type: "strike" as const },
  ]

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #0d2b20 0%, #0A261D 70%)",
          }}
        />

        {/* Title */}
        <div
          className="absolute top-[8%] z-20 px-4 text-center md:top-[10%]"
          style={{
            opacity: Math.min(animProgress * 3, 1),
          }}
        >
          <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl">
            <span className="text-balance">
              {"Простая "}
              <span className="text-[#CCFF00]">{"экономика"}</span>
              {" роста"}
            </span>
          </h2>
        </div>

        {/* Receipt */}
        <div
          className="relative z-10 w-full max-w-md px-4"
          style={{
            transform: `translateY(${receiptY}%)`,
            opacity: Math.min(animProgress * 2, 1),
          }}
        >
          {/* Receipt paper */}
          <div className="overflow-hidden rounded-lg bg-[#F8F5F2] p-6 shadow-2xl md:p-8">
            {/* Receipt header */}
            <div className="mb-6 border-b border-dashed border-[#0A261D]/20 pb-4 text-center">
              <span className="font-serif text-xl font-bold text-[#0A261D]">
                {"FLORIS"}
              </span>
              <p className="mt-1 font-mono text-xs text-[#0A261D]/50">
                {"Расчет вашей выгоды"}
              </p>
            </div>

            {/* Receipt lines */}
            <div className="flex flex-col gap-3">
              {receiptLines.map((line, i) => {
                const isStrike = line.type === "strike"
                return (
                  <div
                    key={i}
                    className="relative flex items-center justify-between"
                  >
                    <span
                      className="font-sans text-sm text-[#0A261D]/80"
                      style={{
                        textDecoration:
                          isStrike && strikeProgress > 0.5
                            ? "line-through"
                            : "none",
                        color:
                          isStrike && strikeProgress > 0.5
                            ? "rgba(10,38,29,0.3)"
                            : undefined,
                      }}
                    >
                      {line.label}
                    </span>
                    <span
                      className="font-mono text-sm font-bold"
                      style={{
                        color:
                          isStrike
                            ? strikeProgress > 0.5
                              ? "rgba(239,68,68,0.4)"
                              : "rgb(239,68,68)"
                            : "#0A261D",
                        textDecoration:
                          isStrike && strikeProgress > 0.5
                            ? "line-through"
                            : "none",
                      }}
                    >
                      {line.value}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-dashed border-[#0A261D]/20" />

            {/* Savings reveal */}
            <div
              className="text-center"
              style={{
                opacity: savingsProgress,
                transform: `scale(${0.8 + savingsProgress * 0.2})`,
              }}
            >
              <p className="mb-1 font-sans text-xs uppercase tracking-wider text-[#0A261D]/50">
                {"Ваша экономия в месяц"}
              </p>
              <p
                className="font-mono text-4xl font-bold md:text-5xl"
                style={{
                  color: "#CCFF00",
                  textShadow: "0 0 30px rgba(204,255,0,0.3)",
                  background: "linear-gradient(135deg, #CCFF00, #88cc00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {"+240 000 P"}
              </p>
              <p className="mt-2 font-sans text-sm text-[#0A261D]/60">
                {"Деньги, которые остаются в вашем бизнесе"}
              </p>
            </div>

            {/* Receipt footer tear */}
            <div className="mt-6 border-t border-dashed border-[#0A261D]/20 pt-3 text-center">
              <span className="font-mono text-[10px] text-[#0A261D]/30">
                {"*** СПАСИБО ЗА РАСЧЕТ ***"}
              </span>
            </div>
          </div>

          {/* Receipt shadow / glow */}
          <div
            className="absolute -inset-4 -z-10 rounded-xl"
            style={{
              background: `radial-gradient(ellipse at center, rgba(204,255,0,${savingsProgress * 0.15}) 0%, transparent 70%)`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
