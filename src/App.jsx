import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PixelOverlay from "./components/PixelOverlay";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import SupportYourCommunity from "./components/SupportYourCommunity";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar />
      <Hero />
      <PixelOverlay />
      <Stats />
      <SupportYourCommunity />
      <AboutUs />
    </div>
  );
}
