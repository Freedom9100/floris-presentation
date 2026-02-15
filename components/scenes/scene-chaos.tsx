"use client"

import { motion } from "framer-motion"
import { AlertTriangle, MessageSquare, MapPin, Clock, Percent } from "lucide-react"

const chaosItems = [
  { text: "Flowwow -20%", icon: Percent, x: 12, y: 15 },
  { text: "WhatsApp (99+)", icon: MessageSquare, x: 68, y: 8 },
  { text: "Где мой заказ?", icon: Clock, x: 25, y: 35 },
  { text: "Адрес?", icon: MapPin, x: 75, y: 42 },
  { text: "Ответьте!", icon: AlertTriangle, x: 45, y: 12 },
  { text: "Перевод на карту?", icon: MessageSquare, x: 82, y: 28 },
  { text: "Уточните цену", icon: AlertTriangle, x: 8, y: 48 },
  { text: "Ошибка в адресе!", icon: MapPin, x: 38, y: 55 },
  { text: "Когда доставка?", icon: Clock, x: 15, y: 68 },
  { text: "Скидка есть?", icon: Percent, x: 62, y: 65 },
  { text: "Не отвечаете!", icon: AlertTriangle, x: 55, y: 25 },
  { text: "Срочно нужно", icon: Clock, x: 88, y: 58 },
]

// Floating animation variants
const floatVariants = [
  {
    y: [0, -8, 0],
    x: [0, 3, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  {
    y: [0, 6, 0],
    x: [0, -4, 0],
    transition: {
      duration: 4.1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  {
    y: [0, -5, 0],
    x: [0, 2, 0],
    transition: {
      duration: 3.7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
]

export function SceneChaos() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f1a15 0%, #0A261D 80%)",
        }}
      />

      {/* Section title */}
      <motion.div
        className="relative z-20 text-center px-4 pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl lg:text-6xl">
          <span className="text-balance">
            {"Почему вы "}
            <span className="text-[#FBCFE8]">{"теряете деньги"}</span>
            {" сейчас?"}
          </span>
        </h2>
      </motion.div>

      {/* Chaos notification storm - absolute positioned */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 min-h-[600px] md:min-h-[500px] flex items-center justify-center">
        <div className="relative w-full h-[600px] md:h-[500px]">
          {chaosItems.map((item, i) => {
            const Icon = item.icon
            const floatVariant = floatVariants[i % floatVariants.length]
            
            return (
              <motion.div
                key={i}
                className="absolute flex items-center gap-2 rounded-full border border-emerald-800/50 bg-emerald-950/40 px-4 py-2.5 shadow-lg backdrop-blur-sm"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut"
                }}
                animate={floatVariant}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#CCFF00] md:h-4 md:w-4" />
                <span className="whitespace-nowrap font-mono text-xs text-[#F8F5F2]/90 md:text-sm">
                  {item.text}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom stats - clean row */}
      <motion.div
        className="relative z-20 flex flex-col items-center gap-8 px-4 pb-8 md:flex-row md:gap-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { figure: "20%", label: "комиссии агрегаторов\nсъедают маржу" },
          { figure: "50%", label: "времени флористов\nуходит на переписки" },
          { figure: "3 мин", label: "и клиент уходит\nк конкуренту" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
          >
            <span className="font-mono text-5xl font-bold text-[#CCFF00] md:text-6xl leading-none">
              {stat.figure}
            </span>
            <span className="max-w-[200px] font-sans text-sm text-[#F8F5F2]/50 leading-tight whitespace-pre-line">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
