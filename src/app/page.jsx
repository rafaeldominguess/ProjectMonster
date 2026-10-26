
import BannerSection from "./_components/BannerSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import OneDrink from "./_components/OneDrinkSection";
import PricingSection from "./_components/PricingSection";
import Testemonials from "./_components/TestemonialsSection";
import WhySection from "./_components/WhySection";

export default function Home() {
  return (
    <>
    <Header /> 
    <HeroSection />
    <PricingSection />
    <BannerSection />
    <WhySection />
    <OneDrink />
    <Testemonials />
    <Footer />
    </>
  );
}
