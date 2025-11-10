import { ProductCard } from '../../components/ProductCard/ProductCard';
import { motion, type Variants } from 'framer-motion';
// 1. Import FaBoxes for the new product
import { FaChartLine, FaShieldAlt, FaBrain, FaBoxes } from 'react-icons/fa'; 

// Animation for the grid container to stagger its children
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card will animate in 0.2s after the previous one
    },
  },
};

// Animation for the individual cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 }
  }
};

export const ProductsSection = () => {
  return (
    <section id="products" className="w-full py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADING FIX --- */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            // Use a simpler, more reliable fade-in
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            Built for the Future
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our suite of AI-powered tools, designed for both our community and 
            the enterprise.
          </motion.p>
        </div>
        {/* --- END OF FIX --- */}

        {/* --- GRID & CONTENT FIX --- */}
        <motion.div 
          // 2. Changed to a 2x2 grid on desktop
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1: Quantum Dash */}
          <motion.div variants={cardVariants}>
            <ProductCard
              title="Quantum Dash (Community)"
              description="Our open-source data analytics platform. Upload data, get AI-powered insights, and build dashboards."
              icon={FaChartLine}
              redirectUrl="/products/quantumdash"
              linkType="page"
            />
          </motion.div>

          {/* Card 2: Assurely (KYC) */}
          <motion.div variants={cardVariants}>
            <ProductCard
              title="Assurely (KYC Suite)" // 3. Updated Name
              description="A full product suite for identity verification, e-signing, document management, and compliance."
              icon={FaShieldAlt}
              redirectUrl="/products/kyc-suite" 
              linkType="page"
            />
          </motion.div>

          {/* Card 3: Custom AI */}
          <motion.div variants={cardVariants}>
            <ProductCard
              title="Custom AI Models (Enterprise)"
              description="Bespoke AI and ML models tailored to your specific business challenges, from NLP to computer vision."
              icon={FaBrain}
              redirectUrl="/products/custom-ai"
              linkType="page"
            />
          </motion.div>
          
          {/* Card 4: NEW Product */}
          <motion.div variants={cardVariants}>
            <ProductCard
              title="Agaami Stock-Flow" // 4. New Product Name
              description="AI-powered inventory management to predict dead stock and optimize levels by seasonal/regional demand."
              icon={FaBoxes} // 5. New Icon
              redirectUrl="/products/stock-flow" // 6. New Link
              linkType="page"
            />
          </motion.div>
        </motion.div>
        {/* --- END OF FIX --- */}

        <div className="text-center mt-16">
          <motion.button
            className="py-3 px-8 rounded-lg text-white font-semibold 
                      bg-gradient-to-r from-purple-500 to-cyan-500
                      hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get Early Access
          </motion.button>
        </div>

      </div>
    </section>
  );
};
