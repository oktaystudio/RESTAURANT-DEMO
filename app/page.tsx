import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Popular from "@/components/Popular";
import Gallery from "@/components/Gallery";
import Campaigns from "@/components/Campaigns";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
     <>
  <Navbar />
  <Hero />
  <About />
  <Menu />
  <Popular />
  <Gallery />
  <Campaigns />
  <Contact />
</>
    </main>
  );
}