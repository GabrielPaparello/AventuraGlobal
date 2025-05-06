import { DestinosPopulares } from "./components/DestinosPopulares";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="relative bg-gray-100">
      <Hero />
      <DestinosPopulares />
    </div>
  );
}
