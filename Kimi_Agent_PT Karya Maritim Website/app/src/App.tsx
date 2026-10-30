import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Ticker } from "@/sections/Ticker";
import { About } from "@/sections/About";
import { Products } from "@/sections/Products";
import { Process } from "@/sections/Process";
import { Export } from "@/sections/Export";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useRevealRoot } from "@/hooks/useReveal";

export default function App() {
  useRevealRoot();

  return (
    <div className="min-h-screen bg-foam text-ink overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <section aria-label="Highlights" className="overflow-hidden">
          <Ticker />
        </section>
        <About />
        <Products />
        <Process />
        <Export />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
