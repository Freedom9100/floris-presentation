"use client"

import { motion } from "framer-motion"

export function SceneReceipt() {
  const receiptLines = [
    { label: "Средний чек", value: "4 000 P", type: "normal" as const },
    { label: "Заказов в день", value: "x10", type: "normal" as const },
    { label: "Дней в месяце", value: "x30", type: "normal" as const },
    { label: "Комиссия агрегатора", value: "-20%", type: "strike" as const },
    { label: "Потеря в месяц", value: "-240 000 P", type: "strike" as const },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #0d2b20 0%, #0A261D 70%)",
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
            {"Простая "}
            <span className="text-[#CCFF00]">{"экономика"}</span>
            {" роста"}
          </span>
        </h2>
      </motion.div>

      {/* Receipt - static, fully visible */}
      <motion.div
        className="relative z-10 w-full max-w-md px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
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
          <div className="flex flex-col gap-3 mb-4">
            {receiptLines.map((line, i) => {
              const isStrike = line.type === "strike"
              return (
                <motion.div
                  key={i}
                  className="relative flex items-center justify-between"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                >
                  <span
                    className="font-sans text-sm text-[#0A261D]/80"
                    style={{
                      textDecoration: isStrike ? "line-through" : "none",
                    }}
                  >
                    {line.label}
                  </span>
                  <span
                    className="font-mono text-sm font-bold"
                    style={{
                      color: isStrike ? "rgb(239,68,68)" : "#0A261D",
                      textDecoration: isStrike ? "line-through" : "none",
                    }}
                  >
                    {line.value}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-dashed border-[#0A261D]/20" />

          {/* Savings reveal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
          </motion.div>

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
            background: "radial-gradient(ellipse at center, rgba(204,255,0,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </section>
  )
}
