export default function Campaigns() {
  const campaigns = [
    {
      badge: "HAFTA İÇİ FIRSATI",
      title: "2 Burger Al",
      highlight: "1 İçecek Bizden!",
      description:
        "Hafta içi tüm burger siparişlerinde geçerli özel fırsatı kaçırmayın.",
      button: "Fırsatı İncele",
    },
    {
      badge: "ÖĞLE MENÜSÜ",
      title: "Doyurucu Menü",
      highlight: "₺249",
      description:
        "Hafta içi 12:00 - 16:00 saatleri arasında özel öğle menümüzü keşfedin.",
      button: "Menüyü Gör",
    },
    {
      badge: "AİLE PAKETİ",
      title: "Kalabalık Sofralara",
      highlight: "Özel Fiyat!",
      description:
        "Aileniz veya arkadaşlarınızla paylaşabileceğiniz özel paket seçenekleri.",
      button: "Detayları Gör",
    },
  ];

  return (
    <section
      id="kampanyalar"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
            KAÇIRMAMANIZ GEREKENLER
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Özel <span className="text-orange-500">Kampanyalar</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Lezzetli yemeklerin yanında avantajlı fırsatların da tadını
            çıkarın.
          </p>
        </div>

        {/* Kampanya Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Dekoratif Turuncu Alan */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-orange-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">

                <span className="inline-block bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                  {campaign.badge}
                </span>

                <h3 className="text-3xl font-black mt-8">
                  {campaign.title}
                </h3>

                <p className="text-orange-500 text-2xl font-black mt-2">
                  {campaign.highlight}
                </p>

                <p className="text-gray-400 leading-relaxed mt-5">
                  {campaign.description}
                </p>

                <a
                  href="#menu"
                  className="inline-block mt-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-bold transition"
                >
                  {campaign.button}
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}