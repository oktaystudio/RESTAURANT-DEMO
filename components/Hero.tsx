import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Arka Plan Fotoğrafı */}
      <Image
        src="/hero.png"
        alt="Lezzet Durağı"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Koyu Katman */}
      <div className="absolute inset-0 bg-black/60" />

      {/* İçerik */}
      <div className="relative z-10 text-center text-white px-6">

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

      </div>

    </section>
  );
}