"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ARKA PLAN FOTOĞRAFI */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src="/hero.png"
          alt="Lezzet Durağı"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Koyu Katman */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      {/* Turuncu Işık Efekti */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.15],
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.3), transparent 45%)",
        }}
      />

      {/* TÜM İÇERİK */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <p className="text-orange-500 font-bold text-lg md:text-xl mb-4">
          LEZZETİN ADRESİ
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          LEZZET DURAĞI
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mt-6">
          Taptaze malzemeler, özenle hazırlanan tarifler
          ve unutulmaz lezzetler.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#menu"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition hover:scale-105"
          >
            Menüyü İncele
          </a>

          <a
            href="#iletisim"
            className="border border-white/40 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full font-bold transition"
          >
            Bize Ulaşın
          </a>
        </div>
      </motion.div>
    </section>
  );
}