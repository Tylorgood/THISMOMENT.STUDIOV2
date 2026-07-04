import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import Experience from "@/sections/Experience";
import Services from "@/sections/Services";
import CreatorWebsites from "@/sections/CreatorWebsites";
import Gallery from "@/sections/Gallery";
import Shows from "@/sections/Shows";
import Booking from "@/sections/Booking";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main data-testid="home-page" className="relative">
      <Navigation />
      <Hero />
      <Experience />
      <Services />
      <CreatorWebsites />
      <Gallery />
      <Shows />
      <Booking />
      <Footer />
    </main>
  );
}
