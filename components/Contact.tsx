"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const whatsappMessage =
      `Merhaba, Lezzet Durağı web sitesinden iletişime geçiyorum.%0A%0A` +
      `Ad Soyad: ${encodeURIComponent(name)}%0A` +
      `Telefon: ${encodeURIComponent(phone)}%0A` +
      `Mesaj: ${encodeURIComponent(message)}`;

    window.open(
      `https://wa.me/905447310322?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="iletisim" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Başlık */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-bold tracking-widest text-sm mb-3">
            İLETİŞİM
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Bize <span className="text-orange-500">Ulaşın</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-lg">
            Rezervasyon, sipariş veya herhangi bir sorunuz için
            bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* İçerik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* İletişim Bilgileri */}
          <div className="bg-gray-950 text-white rounded-3xl p-8 md:p-10">

            <h3 className="text-3xl font-black">
              İletişim Bilgileri
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Sizleri Lezzet Durağı'nda ağırlamaktan mutluluk duyarız.
            </p>

            <div className="space-y-7 mt-10">

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Telefon
                  </p>

                  <a
                    href="tel:05447310322"
                    className="text-lg font-bold hover:text-orange-500 transition"
                  >
                    0544 731 03 22
                  </a>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
                  📍
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Adres
                  </p>

                  <p className="text-lg font-bold">
                    Yakında eklenecek
                  </p>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500 flex items-center justify-center text-xl">
                  🕐
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Çalışma Saatleri
                  </p>

                  <p className="text-lg font-bold">
                    Her Gün
                  </p>

                  <p className="text-gray-400">
                    10:00 - 23:00
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/905447310322?text=Merhaba%2C%20sipariş%20vermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-10 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-bold transition hover:scale-[1.02]"
            >
              WhatsApp'tan Sipariş Ver
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lezzetduragi"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white px-6 py-4 rounded-full font-bold transition hover:scale-[1.02]"
            >
              Instagram'da Bizi Takip Et
            </a>

          </div>

          {/* İletişim Formu */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">

            <h3 className="text-3xl font-black text-gray-900">
              Mesaj Gönder
            </h3>

            <p className="text-gray-500 mt-3">
              Size en kısa sürede dönüş yapabilmemiz için formu
              doldurabilirsiniz.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                required
                placeholder="Adınız Soyadınız"
                className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Telefon Numaranız"
                className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />

              <textarea
                rows={5}
                name="message"
                required
                placeholder="Mesajınız"
                className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition hover:scale-[1.01]"
              >
                WhatsApp'tan Mesaj Gönder
              </button>

            </form>

          </div>

        </div>

      </div>
      {/* Web Tasarım */}
<div className="mt-16 pt-8 border-t border-gray-200 text-center">
  <p className="text-black-500 text-sm">
    Web Tasarım & Geliştirme:{" "}
    <span className="text-orange-700 font-black text-xl">
  Oktay Studio
</span>
  </p>
</div>
    </section>
  );
}