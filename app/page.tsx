import { CTA } from "./components/CTA";
import { DestinosPopulares } from "./components/DestinosPopulares";
import { Experiencias } from "./components/Experiencias";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="relative bg-gray-100">
      <Hero />
      <DestinosPopulares />
      <Experiencias />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
