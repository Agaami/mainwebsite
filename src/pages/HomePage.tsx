import { HeroSection } from '../sections/Hero/HeroSection';
import { VisionMission } from '../sections/VisionMission/VisionMission';
import { ProductsSection } from '../sections/Products/ProductsSection';
import { ServicesSection } from '../sections/Services/ServicesSection';
import { RoadmapSection } from '../sections/Roadmap/RoadmapSection';
import { ContactSection } from '../sections/Contact/ContactSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <VisionMission />
      <ProductsSection />
      <ServicesSection />
      <RoadmapSection />
      <ContactSection />
    </>
  );
};