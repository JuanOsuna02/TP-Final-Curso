import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PixelOverlay from "./components/PixelOverlay";
import Stats from "./components/Stats";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import DonateSection from "./components/DonateSection";
import SupportYourCommunity from "./components/SupportYourCommunity";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <Navbar />
      <Hero />
      <PixelOverlay />
      <Stats />
      <SupportYourCommunity />
      <AboutUs />
      <OurTeam />
      <Testimonials />
      <DonateSection />
      <Footer />
    </div>
  );
}
