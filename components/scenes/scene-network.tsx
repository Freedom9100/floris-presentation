"use client"

import { motion } from "framer-motion"
import { Bell, Users, Settings, Send, Gift, Repeat } from "lucide-react"

// Customer nodes positioned radially
const customers = [
  { name: "Анна", x: 15, y: 20, angle: -135 },
  { name: "Сергей", x: 85, y: 20, angle: -45 },
  { name: "Дмитрий", x: 8, y: 50, angle: 180 },
  { name: "Мария", x: 92, y: 50, angle: 0 },
  { name: "Елена", x: 20, y: 80, angle: 135 },
  { name: "Алексей", x: 80, y: 80, angle: 45 },
]

// Notification bubbles
const notifications = [
  { 
    text: "Пора заказать розы для мамы", 
    icon: Gift, 
    x: 72, 
    y: 15 
  },
  { 
    text: "Скидка 10% только для вас", 
    icon: Bell, 
    x: 12, 
    y: 72 
  },
  { 
    text: "Ваш заказ доставлен!", 
    icon: Send, 
    x: 75, 
    y: 75 
  },
]

// Features at the bottom
const features = [
  { icon: Send, title: "Бесплатные рассылки", desc: "Перед праздниками" },
  { icon: Bell, title: "Авто-напоминания", desc: "О важных датах" },
  { icon: Repeat, title: "Повторные продажи", desc: "Без затрат на рекламу" },
  { icon: Settings, title: "Управление в 2 клика", desc: "Витрина и заказы" },
]

export function SceneNetwork() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden py-20 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
        }}
      />

      {/* Title */}
      <motion.div
        className="relative z-20 text-center px-4 pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl">
          <span className="text-balance">
            {"Ваша база клиентов — ваш "}
            <span className="text-[#FBCFE8]">{"главный актив"}</span>
          </span>
        </h2>
      </motion.div>

      {/* Radial Network Visualization */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-center" style={{ minHeight: "600px" }}>
        <div className="relative w-full h-[600px] md:h-[550px]">
          
          {/* Central Hub with Ripple Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Concentric squares (ripples) */}
            {[1, 2, 3, 4].map((ring) => (
              <motion.div
                key={ring}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-emerald-800/30"
                style={{
                  width: ring * 80,
                  height: ring * 80,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + ring * 0.1 }}
              />
            ))}

            {/* Central "F" logo */}
            <motion.div
              className="relative z-30 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#CCFF00]/40 bg-[#0A261D] shadow-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            >
              <span className="font-serif text-3xl font-bold text-[#CCFF00]">
                {"F"}
              </span>
            </motion.div>
          </div>

          {/* Radial Dashed Lines + Customer Nodes */}
          {customers.map((customer, i) => {
            // Calculate line end position
            const centerX = 50 // Center in percentage
            const centerY = 50
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                {/* Dashed line from center to customer */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: "visible" }}
                >
                  <line
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${customer.x}%`}
                    y2={`${customer.y}%`}
                    stroke="#CCFF00"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                </svg>

                {/* Customer Node */}
                <motion.div
                  className="absolute flex flex-col items-center gap-1.5"
                  style={{
                    left: `${customer.x}%`,
                    top: `${customer.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-700/50 bg-emerald-950/60 backdrop-blur-sm shadow-lg">
                    <Users className="h-5 w-5 text-[#FBCFE8]" />
                  </div>
                  <span className="font-mono text-xs text-[#F8F5F2]/70 whitespace-nowrap">
                    {customer.name}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Notification Bubbles */}
          {notifications.map((notif, i) => {
            const Icon = notif.icon
            return (
              <motion.div
                key={i}
                className="absolute flex items-center gap-2 rounded-full border border-emerald-700/50 bg-emerald-950/80 px-3 py-2 shadow-lg backdrop-blur-md"
                style={{
                  left: `${notif.x}%`,
                  top: `${notif.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#CCFF00]" />
                <span className="whitespace-nowrap font-mono text-xs text-[#F8F5F2]/90">
                  {notif.text}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Features Grid at Bottom */}
      <motion.div
        className="relative z-20 grid grid-cols-2 gap-3 px-4 pb-8 max-w-3xl md:grid-cols-4 md:gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {features.map((feat, i) => {
          const Icon = feat.icon
          return (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 rounded-xl border border-emerald-800/30 bg-emerald-950/30 p-4 text-center backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.3 + i * 0.08 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#CCFF00]/10">
                <Icon className="h-5 w-5 text-[#CCFF00]" />
              </div>
              <span className="font-sans text-xs font-medium text-[#F8F5F2]/90">
                {feat.title}
              </span>
              <span className="font-sans text-[10px] text-[#F8F5F2]/50">
                {feat.desc}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
