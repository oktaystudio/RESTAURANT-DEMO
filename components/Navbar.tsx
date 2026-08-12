"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const links = [
  { name: "Ana Sayfa", href: "#anasayfa" },
  { name: "Hakkımızda", href: "#hakkimizda" },
  { name: "Menü", href: "#menu" },
  { name: "Popüler", href: "#populer" },
  { name: "Galeri", href: "#galeri" },
  { name: "Kampanyalar", href: "#kampanyalar" },
  { name: "İletişim", href: "#iletisim" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#anasayfa"
            className="text-2xl md:text-3xl font-black text-white"
          >
            LEZZET
            <span className="text-orange-500"> DURAĞI</span>
          </a>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-gray-300 hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/905447310322?text=Merhaba%2C%20sipariş%20vermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-bold transition hover:scale-105"
            >
              Sipariş Ver
            </a>
          </div>

          {/* Mobil Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
            aria-label="Menüyü aç"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 hover:text-orange-500 hover:bg-white/5 px-4 py-3 rounded-xl font-bold transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://wa.me/905447310322?text=Merhaba%2C%20sipariş%20vermek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-bold mt-2 transition"
              >
                WhatsApp'tan Sipariş Ver
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}