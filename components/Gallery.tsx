"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "/hero.png",
      alt: "Lezzet Durağı restoran",
      title: "Restoranımız",
    },
    {
      src: "/hero.png",
      alt: "Lezzet Durağı yemek",
      title: "Özel Lezzetler",
    },
    {
      src: "/hero.png",
      alt: "Lezzet Durağı",
      title: "Keyifli Anlar",
    },
    {
      src: "/hero.png",
      alt: "Lezzet Durağı",
      title: "Şefin Mutfağı",
    },
    {
      src: "/hero.png",
      alt: "Lezzet Durağı",
      title: "Özel Sunumlar",
    },
    {
      src: "/hero.png",
      alt: "Lezzet Durağı",
      title: "Sıcak Atmosfer",
    },
  ];

  return (
    <section
      id="galeri"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
            GALERİ
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Lezzetimize
            <span className="text-orange-500"> Göz Atın</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-lg">
            Mutfağımızdan, restoranımızdan ve unutulmaz anlarımızdan
            kareler.
          </p>
        </motion.div>

        {/* Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0
                  ? "lg:row-span-2 lg:h-[500px]"
                  : "h-60"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />

              {/* Yazı */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className="text-orange-500 font-bold text-sm">
                    LEZZET DURAĞI
                  </p>

                  <h3 className="text-white text-2xl font-black mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}