"use client";

import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const menuItems = [
    {
      name: "Izgara Bonfile",
      category: "Ana Yemekler",
      description: "Izgara sebzeler ve özel sos eşliğinde.",
      price: "₺480",
      image: "/hero.png",
    },
    {
      name: "Lezzet Burger",
      category: "Burger",
      description: "Dana eti, cheddar, karamelize soğan ve özel sos.",
      price: "₺290",
      image: "/hero.png",
    },
    {
      name: "Karışık Pizza",
      category: "Pizza",
      description: "Özel sos, mozzarella ve birbirinden lezzetli malzemeler.",
      price: "₺340",
      image: "/hero.png",
    },
    {
      name: "Tavuk Izgara",
      category: "Ana Yemekler",
      description: "Özel baharatlarla marine edilmiş tavuk.",
      price: "₺360",
      image: "/hero.png",
    },
    {
      name: "Çikolatalı Sufle",
      category: "Tatlı",
      description: "Sıcak çikolata dolgulu, dondurma eşliğinde.",
      price: "₺180",
      image: "/hero.png",
    },
    {
      name: "Cheeseburger",
      category: "Burger",
      description: "Dana eti, cheddar peyniri, marul ve özel sos.",
      price: "₺270",
      image: "/hero.png",
    },
  ];

  const categories = [
    "Tümü",
    "Ana Yemekler",
    "Burger",
    "Pizza",
    "Tatlı",
  ];

  const filteredItems =
    activeCategory === "Tümü"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
            MENÜMÜZ
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Lezzetli{" "}
            <span className="text-orange-500">Seçenekler</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-lg">
            Her damak zevkine uygun, özenle hazırladığımız lezzetleri
            keşfedin.
          </p>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menü Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Fotoğraf */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  {item.price}
                </div>
              </div>

              {/* Bilgi */}
              <div className="p-6">
                <p className="text-orange-500 text-sm font-bold mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-black text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={`https://wa.me/905447310322?text=Merhaba%2C%20${encodeURIComponent(
                    item.name
                  )}%20siparişi%20vermek%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-gray-900 font-bold hover:text-orange-500 transition"
                >
                  Sipariş Ver →
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}