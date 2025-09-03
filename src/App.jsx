import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PixelOverlay from "./components/PixelOverlay";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar />
      <Hero />
      <PixelOverlay />
      <Stats />
    </div>
  );
}
