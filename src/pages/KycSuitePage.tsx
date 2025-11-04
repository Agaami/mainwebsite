import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

export const KycSuitePage = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Secure KYC Suite
          </h1>
          
          {/* --- NEW COMING SOON CARD --- */}
          <div className="glass-card rounded-xl p-12 max-w-2xl mx-auto">
            <FaShieldAlt className="text-7xl text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-300">
              Our AI-powered identity verification and compliance solution
              is currently in development.
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Stay tuned for updates!
            </p>
          </div>
          {/* --- END NEW CARD --- */}

        </motion.div>
      </div>
    </section>
  );
};