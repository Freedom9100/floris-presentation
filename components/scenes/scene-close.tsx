"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Floating petal positions - static decorative elements
const petals = [
  { x: 10, y: 20, size: 12 },
  { x: 85, y: 15, size: 10 },
  { x: 20, y: 75, size: 14 },
  { x: 75, y: 80, size: 11 },
  { x: 50, y: 10, size: 9 },
  { x: 30, y: 45, size: 13 },
  { x: 70, y: 50, size: 10 },
  { x: 15, y: 55, size: 11 },
  { x: 90, y: 40, size: 8 },
  { x: 45, y: 85, size: 12 },
  { x: 60, y: 25, size: 9 },
  { x: 5, y: 90, size: 10 },
]

export function SceneClose() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
        }}
      />

      {/* Floating petals - static, subtle decoration */}
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            width: petal.size,
            height: petal.size * 1.3,
            background: `radial-gradient(ellipse at center, rgba(251,207,232,0.4) 0%, rgba(251,207,232,0.1) 100%)`,
            boxShadow: `0 0 ${petal.size}px rgba(251,207,232,0.2)`,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center gap-8 px-4 text-center max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
        <motion.button
          className="group mt-4 flex items-center gap-3 rounded-full border-2 border-[#CCFF00] bg-[#CCFF00] px-8 py-4 font-sans text-lg font-bold text-[#0A261D] shadow-lg transition-all hover:bg-[#CCFF00]/90 hover:scale-105 md:px-12 md:py-5 md:text-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {"Забрать свою прибыль"}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6" />
        </motion.button>

        {/* Sub-offers */}
        <motion.div
          className="mt-4 flex flex-col items-center gap-3 md:flex-row md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
        </motion.div>
      </motion.div>

      {/* Bottom logo */}
      <motion.div
        className="absolute bottom-8 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <span className="font-serif text-lg tracking-wider text-[#F8F5F2]/20">
          {"FLORIS"}
        </span>
      </motion.div>
    </section>
  )
}
