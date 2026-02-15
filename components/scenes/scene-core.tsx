"use client"

import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Truck } from "lucide-react"

export function SceneCore() {
  const features = [
    { icon: ShoppingCart, text: "Клиент сам выбирает букет" },
    { icon: CreditCard, text: "Оплата в один клик через СБП" },
    { icon: Truck, text: "Готовый оплаченный заказ флористу" },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 px-4">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
        }}
      />

      {/* Title */}
      <motion.div
        className="relative z-20 mb-16 text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[#CCFF00]">
          {"Решение"}
        </p>
        <h2 className="font-serif text-3xl font-bold text-[#F8F5F2] md:text-5xl lg:text-6xl">
          <span className="text-balance">
            {"Ваш личный "}
            <span className="text-[#CCFF00]">{"Telegram Mini App"}</span>
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base text-[#F8F5F2]/60 md:text-lg">
          {"Полноценный сайт-магазин, который открывается мгновенно прямо в Telegram"}
        </p>
      </motion.div>

      {/* Phone mockup - static, fully rendered */}
      <motion.div
        className="relative z-10 mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Phone frame */}
        <div className="relative mx-auto w-[280px] overflow-hidden rounded-[2.5rem] border-[3px] border-[#F8F5F2]/15 bg-[#111] shadow-2xl md:w-[320px]">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-[#111] px-6 py-2">
            <span className="font-mono text-xs text-[#F8F5F2]/50">{"9:41"}</span>
            <div className="mx-auto h-5 w-20 rounded-full bg-[#222]" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-[#F8F5F2]/30" />
              <div className="h-2 w-3 rounded-sm bg-[#F8F5F2]/30" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-[#0A261D] p-4">
            {/* App header */}
            <div className="mb-4 flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-[#F8F5F2]">
                {"Floris"}
              </span>
              <div className="rounded-full bg-[#CCFF00]/10 px-3 py-1">
                <span className="font-mono text-xs text-[#CCFF00]">{"Каталог"}</span>
              </div>
            </div>

            {/* Product image */}
            <img
              src="images/bouquet.jpg"
              alt="Bouquet in app"
              width={300}
              height={200}
              className="mb-3 rounded-xl object-cover"
              style={{ height: 160 }}
              loading="lazy"
            />

            {/* Product card */}
            <div className="mb-3 rounded-xl bg-[#F8F5F2]/5 p-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm text-[#F8F5F2]">
                  {"Букет 'Нежность'"}
                </span>
                <span className="font-mono text-sm font-bold text-[#CCFF00]">
                  {"4 500 P"}
                </span>
              </div>
            </div>

            {/* CTA button */}
            <button className="w-full rounded-xl bg-[#CCFF00] py-3 font-sans text-sm font-bold text-[#0A261D]">
              {"Заказать за 45 секунд"}
            </button>
          </div>
        </div>

        {/* Phone glow */}
        <div
          className="absolute -inset-8 -z-10 rounded-[3rem]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(204,255,0,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Features row */}
      <motion.div
        className="relative z-20 flex flex-col items-center gap-4 px-4 md:flex-row md:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {features.map((feat, i) => {
          const Icon = feat.icon
          return (
            <motion.div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-[#F8F5F2]/10 bg-[#0A261D]/60 px-6 py-3 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#CCFF00]/10">
                <Icon className="h-4 w-4 text-[#CCFF00]" />
              </div>
              <span className="font-sans text-sm text-[#F8F5F2]/80">
                {feat.text}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
