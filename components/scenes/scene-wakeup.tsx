"use client"

import { motion } from "framer-motion"

export function SceneWakeup() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Radial gradient bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #0f3328 0%, #0A261D 70%)",
        }}
      />

      {/* Floating petals - decorative, subtle */}
      {Array.from({ length: 12 }, (_, i) => ({
        x: `${10 + (i * 8) % 80}%`,
        y: `${15 + (i * 13) % 70}%`,
        size: 8 + (i % 3) * 4,
      })).map((petal, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: petal.size,
            height: petal.size,
            left: petal.x,
            top: petal.y,
            background:
              i % 2 === 0
                ? "rgba(251, 207, 232, 0.3)"
                : "rgba(204, 255, 0, 0.2)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
        />
      ))}

      {/* Bouquet image - static, centered */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
      </motion.div>

      {/* Text overlay */}
      <motion.div
        className="absolute z-20 flex flex-col items-center gap-6 px-4 text-center max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
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
          {"Пора превратить хаос во время праздников в системную прибыль"}
        </p>
        <div className="mt-4 flex items-center gap-2 text-[#F8F5F2]/40">
          <div className="h-6 w-px bg-[#F8F5F2]/20" />
          <span className="font-mono text-xs uppercase tracking-widest">
            {"Листайте вниз"}
          </span>
          <div className="h-6 w-px bg-[#F8F5F2]/20" />
        </div>
      </motion.div>
    </section>
  )
}
