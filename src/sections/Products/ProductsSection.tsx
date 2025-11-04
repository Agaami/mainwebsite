import { ProductCard } from '../../components/ProductCard/ProductCard';
import { FaChartLine, FaShieldAlt, FaBrain } from 'react-icons/fa'; 

export const ProductsSection = () => {
  return (
    <section id="products" className="w-full py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          {/* ... (header is fine) ... */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <ProductCard
            title="Quantum Dash (Community)"
            description="Our open-source data analytics platform. Upload data, get AI-powered insights, and build dashboards."
            icon={FaChartLine}
            redirectUrl="/products/quantumdash"
            linkType="page"
            delay={0}
          />

          <ProductCard
            title="Secure KYC Suite"
            description="A robust, AI-driven identity verification and compliance solution for seamless onboarding."
            icon={FaShieldAlt}
            redirectUrl="/products/kyc-suite" 
            linkType="page"
            delay={0.2}
          />

          <ProductCard
            title="Custom AI Models (Enterprise)"
            description="Bespoke AI and ML models tailored to your specific business challenges, from NLP to computer vision."
            icon={FaBrain}
            // --- THIS IS THE FIX ---
            redirectUrl="/products/custom-ai" // Link to the new page
            linkType="page" // Use a page link
            // --- END OF FIX ---
            delay={0.4}
          />
          
        </div>

        {/* ... (button is fine) ... */}

      </div>
    </section>
  );
};