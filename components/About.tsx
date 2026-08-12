import Image from "next/image";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Görsel */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Lezzet Durağı restoranı"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            {/* Turuncu Etiket */}
            <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-4 rounded-2xl">
              <p className="text-3xl font-black">10+</p>
              <p className="font-medium">Yıllık Tecrübe</p>
            </div>
          </div>

          {/* İçerik */}
          <div>

            <p className="text-orange-500 font-bold tracking-widest text-sm mb-4">
              HAKKIMIZDA
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Lezzeti,
              <br />
              <span className="text-orange-500">
                Tutkuyla Hazırlıyoruz.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              Lezzet Durağı olarak kaliteli malzemeleri, geleneksel
              tarifleri ve modern dokunuşları bir araya getiriyoruz.
              Amacımız sadece yemek sunmak değil, her ziyaretinizde
              unutamayacağınız bir deneyim yaşatmak.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-5">
              Mutfağımızda kullandığımız her malzemeyi özenle seçiyor,
              her tabağı aynı tutkuyla hazırlıyoruz.
            </p>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">

              <div>
                <p className="text-3xl font-black text-orange-500">
                  10+
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Yıllık Deneyim
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-orange-500">
                  50+
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Özel Lezzet
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-orange-500">
                  15K+
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Mutlu Misafir
                </p>
              </div>

            </div>

            {/* Buton */}
            <a
              href="#iletisim"
              className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition hover:scale-105"
            >
              Bizi Tanıyın
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}