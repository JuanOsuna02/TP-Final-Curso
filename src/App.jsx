import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PixelOverlay from "./components/PixelOverlay";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar />
      <Hero />
      <PixelOverlay />
    </div>
  );
}
