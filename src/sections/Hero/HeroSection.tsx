import { motion, type Variants } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link'; // 1. Import HashLink

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
};

const bounceVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative flex items-center justify-center w-full h-screen"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Tagline */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
            variants={itemVariants}
          >
            Shaping the future with intelligent technology solutions.
          </motion.h1>

          {/* Sub-Tagline */}
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
            variants={itemVariants}
          >
            We harness the power of artificial intelligence to solve complex 
            business challenges and drive future-forward innovation.
          </motion.p>

          {/* 2. Call-to-Action Buttons (FIXED) */}
          <motion.div 
            className="mt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-6"
            variants={itemVariants}
          >
            {/* This button now links to the contact section */}
            <HashLink
              smooth
              to="/#contact"
              className="py-3 px-8 rounded-lg text-white font-semibold 
                        bg-gradient-to-r from-purple-500 to-cyan-500
                        hover:shadow-lg hover:shadow-purple-500/50"
            >
              Book a Demo
            </HashLink>
            
            {/* This button now links to the products section */}
            <HashLink
              smooth
              to="/#products"
              className="flex items-center gap-x-2 glass-card font-medium py-3 px-8 rounded-lg text-white
                        hover:shadow-lg hover:shadow-white/10"
            >
              Explore Products <FaArrowRight />
            </HashLink>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Animated Scroll Down Arrow (FIXED) */}
      <motion.div
        className="absolute bottom-10"
        variants={bounceVariant}
        animate="animate"
      >
        {/* This now links to the "vision" section */}
        <HashLink smooth to="/#vision" aria-label="Scroll to next section">
          <FaArrowDown className="text-gray-400 text-2xl" />
        </HashLink>
      </motion.div>

    </section>
  );
};