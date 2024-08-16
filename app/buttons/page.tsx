import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import CardsButton from "./(cards)/cards-button";
import Cubic from "@/components/cubic";
import WaveBox from "@/components/wave-box";

const Buttons = () => {
  return (
    <>
      <Geminid />
      <WaveBox />
      <HeroSection
        title="Buttons"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <CardsButton />
    </>
  );
};

export default Buttons;