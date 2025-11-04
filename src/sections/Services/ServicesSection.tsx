import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
// Import some new icons for our services
import { FaComments, FaCode, FaChalkboardTeacher } from 'react-icons/fa';

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="w-full py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Accelerate Your Business with Our AI Services
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            From ideation to implementation, we provide end-to-end AI expertise.
          </p>
        </div>

        {/* Grid of Services */}
        {/* This grid is responsive: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ServiceCard
            icon={FaComments}
            title="Chatbot Solutions"
            description="Intelligent, 24/7 conversational AI agents to automate customer support and enhance user engagement."
            delay={0} // First card
          />

          <ServiceCard
            icon={FaCode}
            title="Web Scraping & APIs"
            description="Automated data extraction from any website and custom API development to fuel your AI models and applications."
            delay={0.2} // Second card
          />

          <ServiceCard
            icon={FaChalkboardTeacher}
            title="AI Consulting"
            description="Strategic guidance to identify AI opportunities, define project roadmaps, and integrate solutions into your workflow."
            delay={0.4} // Third card
          />
          
        </div>
      </div>
    </section>
  );
};