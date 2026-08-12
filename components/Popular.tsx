import Image from "next/image";

export default function Popular() {
  const popularItems = [
    {
      name: "Özel Izgara",
      description: "Özenle marine edilmiş et, közlenmiş sebzeler ve özel sos.",
      price: "₺420",
      image: "/hero.png",
    },
    {
      name: "Şef Burger",
      description: "Dana eti, özel burger sosu, cheddar peyniri ve taze sebzeler.",
      price: "₺280",
      image: "/hero.png",
    },
    {
      name: "Karışık Pizza",
      description: "İtalyan usulü hamur, özel domates sosu ve bol malzeme.",
      price: "₺320",
      image: "/hero.png",
    },
  ];

  return (
    <section
      id="populer"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
            EN ÇOK TERCİH EDİLENLER
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Popüler <span className="text-orange-500">Lezzetler</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Misafirlerimizin vazgeçilmezi olan, özenle hazırladığımız
            özel lezzetlerimizi keşfedin.
          </p>
        </div>

        {/* Yemek Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Fotoğraf */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Fotoğraf Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

                {/* Fiyat */}
                <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  {item.price}
                </div>
              </div>

              {/* İçerik */}
              <div className="p-7">
                <h3 className="text-2xl font-black mb-3">
                  {item.name}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

               <a
  href={`https://wa.me/905447310322?text=Merhaba%2C%20${encodeURIComponent(
    item.name
  )}%20hakkında%20bilgi%20almak%20istiyorum.`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 text-orange-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
>
  Detayları Gör
  <span>→</span>
</a>
              </div>

            </div>
          ))}
        </div>

        {/* Menü Butonu */}
        <div className="text-center mt-14">
          <a
            href="#menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition hover:scale-105"
          >
            Tüm Menüyü Gör
          </a>
        </div>

      </div>
    </section>
  );
}