import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero/>
      <Popular/>
      <Menu/>
      <About/>
      <Gallery/>
      <Campaigns/>
      <Contact/>
    </main>
  );
}