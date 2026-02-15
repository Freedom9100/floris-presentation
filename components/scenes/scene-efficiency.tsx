"use client"

import { useRef } from "react"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { X, Check } from "lucide-react"

export function SceneEfficiency() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const animProgress = Math.min(Math.max((progress - 0.15) / 0.6, 0), 1)
  // Slider position: 0% to 100% (left = old model, right = new model revealed)
  const sliderPos = animProgress * 100

  const oldModelItems = [
    "Клиент пишет в чат",
    "Ожидание ответа 10-15 мин",
    "Уточнение цены и наличия",
    "Перевод на карту по номеру",
    "Ошибка в адресе доставки",
    "Потеря лояльности клиента",
  ]

  const newModelItems = [
    "Клиент зашел в Mini App",
    "Выбрал букет самостоятельно",
    "Увидел актуальную цену",
    "Оплатил за 45 секунд",
    "Адрес введен точно",
    "Вы заработали!",
  ]

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #0f2e22 0%, #0A261D 70%)",
          }}
        />

        {/* Title */}
        <div
          className="absolute top-[6%] z-20 px-4 text-center md:top-[8%]"
          style={{
            opacity: Math.min(animProgress * 3, 1),
            transform: `translateY(${(1 - Math.min(animProgress * 3, 1)) * 20}px)`,
          }}
        >
          <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl">
            <span className="text-balance">
              {"Старая модель "}
              <span className="text-[#FBCFE8]">{"vs"}</span>
              {" Новая модель"}
            </span>
          </h2>
          <p className="mt-2 font-mono text-sm text-[#CCFF00]">
            {"Время обработки заказа: с 15 минут до нуля"}
          </p>
        </div>

        {/* Comparison container */}
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-stretch gap-0 px-4 md:flex-row md:px-8">
          {/* Old model side */}
          <div
            className="flex-1 rounded-l-2xl border border-[#F8F5F2]/10 bg-[#0A261D]/80 p-6 backdrop-blur-sm md:p-8"
            style={{
              opacity: 1 - sliderPos / 150,
              filter: `blur(${(sliderPos / 100) * 3}px)`,
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20">
                <X className="h-4 w-4 text-red-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F8F5F2]/60 md:text-2xl">
                {"Старая модель"}
              </h3>
            </div>

            {/* Blurred florist image */}
            <div className="mb-5 overflow-hidden rounded-xl">
              <img
                src="images/florist-chaos.jpg"
                alt="Florist chaos"
                width={400}
                height={200}
                className="h-32 w-full object-cover opacity-60"
                style={{ filter: "grayscale(0.5) blur(1px)" }}
                loading="lazy"
              />
            </div>

            <ul className="flex flex-col gap-3">
              {oldModelItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 font-mono text-xs text-red-400">{"x"}</span>
                  <span className="font-sans text-sm text-[#F8F5F2]/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider / slider */}
          <div className="relative hidden w-1 items-center justify-center md:flex">
            <div className="h-full w-px bg-[#CCFF00]/30" />
            <div
              className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-[#CCFF00]/50 bg-[#0A261D]"
              style={{
                top: `${50 - sliderPos * 0.3}%`,
              }}
            >
              <div className="h-3 w-3 rounded-full bg-[#CCFF00]" />
            </div>
          </div>

          {/* New model side */}
          <div
            className="flex-1 rounded-r-2xl border border-[#CCFF00]/20 bg-[#0A261D]/90 p-6 backdrop-blur-sm md:p-8"
            style={{
              opacity: Math.min(sliderPos / 40, 1),
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CCFF00]/20">
                <Check className="h-4 w-4 text-[#CCFF00]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#CCFF00] md:text-2xl">
                {"Модель TMA"}
              </h3>
            </div>

            {/* Clean phone app image */}
            <div className="mb-5 overflow-hidden rounded-xl border border-[#CCFF00]/10">
              <img
                src="images/phone-app.jpg"
                alt="Telegram Mini App interface"
                width={400}
                height={200}
                className="h-32 w-full object-cover"
                loading="lazy"
              />
            </div>

            <ul className="flex flex-col gap-3">
              {newModelItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 font-mono text-xs text-[#CCFF00]">
                    {"->"}
                  </span>
                  <span className="font-sans text-sm text-[#F8F5F2]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
