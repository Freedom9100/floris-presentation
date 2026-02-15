"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export function SceneEfficiency() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f2e22 0%, #0A261D 70%)",
        }}
      />

      {/* Title */}
      <motion.div
        className="relative z-20 mb-16 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
      </motion.div>

      {/* Side-by-side comparison */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col gap-6 px-4 md:flex-row md:gap-8">
        {/* Old model side */}
        <motion.div
          className="flex-1 rounded-2xl border border-[#F8F5F2]/10 bg-[#0A261D]/80 p-6 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6 flex items-center gap-3">
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
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
              >
                <span className="mt-0.5 font-mono text-xs text-red-400">{"x"}</span>
                <span className="font-sans text-sm text-[#F8F5F2]/50">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* New model side */}
        <motion.div
          className="flex-1 rounded-2xl border border-[#CCFF00]/20 bg-[#0A261D]/90 p-6 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6 flex items-center gap-3">
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
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
              >
                <span className="mt-0.5 font-mono text-xs text-[#CCFF00]">
                  {"->"}
                </span>
                <span className="font-sans text-sm text-[#F8F5F2]/90">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
