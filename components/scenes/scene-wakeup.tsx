"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function SceneWakeup() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  // Map progress: 0.2-0.7 range for the animation
  const animProgress = Math.min(Math.max((progress - 0.2) / 0.5, 0), 1)
  const bouquetScale = 1 + animProgress * 0.3
  const bouquetBlur = animProgress * 10
  const bouquetOpacity = 1 - animProgress * 0.6
  const textOpacity = animProgress < 0.3 ? 1 : 1 - (animProgress - 0.3) / 0.7
  const titleScale = 1 + animProgress * 0.15

  // Petal scatter positions
  const petals = Array.from({ length: 12 }, (_, i) => ({
    x: Math.cos((i / 12) * Math.PI * 2) * animProgress * 200,
    y: Math.sin((i / 12) * Math.PI * 2) * animProgress * 200,
    rotate: animProgress * 360 * (i % 2 === 0 ? 1 : -1),
    opacity: 1 - animProgress * 0.8,
    size: 8 + (i % 3) * 4,
  }))

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Radial gradient bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
          }}
        />

        {/* Floating petals */}
        {petals.map((petal, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: petal.size,
              height: petal.size,
              background:
                i % 2 === 0
                  ? "rgba(251, 207, 232, 0.6)"
                  : "rgba(204, 255, 0, 0.4)",
              transform: `translate(${petal.x}px, ${petal.y}px) rotate(${petal.rotate}deg)`,
              opacity: petal.opacity,
              transition: "transform 0.1s linear",
            }}
          />
        ))}

        {/* Bouquet image */}
        <div
          className="relative z-10"
          style={{
            transform: `scale(${bouquetScale})`,
            filter: `blur(${bouquetBlur}px)`,
            opacity: bouquetOpacity,
          }}
        >
          <img
            src="images/bouquet.jpg"
            alt="Premium bouquet"
            width={400}
            height={400}
            className="rounded-full object-cover"
            style={{ width: 320, height: 320 }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Text overlay */}
        <div
          className="absolute z-20 flex flex-col items-center gap-6 px-4 text-center"
          style={{
            opacity: textOpacity,
            transform: `scale(${titleScale})`,
          }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#CCFF00]">
            {"Floris Telegram Mini App"}
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-[#F8F5F2] md:text-6xl lg:text-7xl">
            <span className="text-balance">
              {"Ваш цветочный бизнес теряет до "}
              <span className="text-[#CCFF00]">{"20% выручки"}</span>
              {" на каждом букете"}
            </span>
          </h1>
          <p className="max-w-2xl font-sans text-lg text-[#F8F5F2]/70 md:text-xl">
            {"Пора превратить хаос в праздники в системную прибыль"}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#F8F5F2]/40">
            <div className="h-6 w-px bg-[#F8F5F2]/20" />
            <span className="font-mono text-xs uppercase tracking-widest">
              {"Скролль вниз"}
            </span>
            <div className="h-6 w-px bg-[#F8F5F2]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
