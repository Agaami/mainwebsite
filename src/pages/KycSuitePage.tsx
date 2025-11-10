import { motion } from 'framer-motion';
// 1. Import new icons for the features
import { FaShieldAlt, FaFileSignature, FaWpforms, FaFolderOpen, FaSearchPlus, FaClipboardCheck } from 'react-icons/fa';

export const KycSuitePage = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Assurely (KYC Suite)
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive product suite to automate and secure your entire
            customer lifecycle, from onboarding to compliance.
          </p>
        </motion.div>

        {/* --- 6 Features Grid --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <FeatureCard
            icon={FaShieldAlt}
            title="KYC Verification"
            description="Automated identity verification to onboard users securely and quickly."
          />
          <FeatureCard
            icon={FaWpforms}
            title="Auto Form Filling"
            description="Extract data from verified documents to pre-fill forms, reducing errors and saving time."
          />
          <FeatureCard
            icon={FaFileSignature}
            title="E-Sign & E-Forms"
            description="Create custom digital forms and securely capture e-signatures for any document."
          />
          <FeatureCard
            icon={FaFolderOpen}
            title="Document Management"
            description="A secure vault for all customer-provided and bank-generated documents."
          />
          <FeatureCard
            icon={FaSearchPlus}
            title="Document Comparison"
            description="Detect fraud and ensure data quality by comparing new documents against existing records."
          />
          <FeatureCard
            icon={FaClipboardCheck}
            title="Audit & Compliance"
            description="Streamline reconciliation and maintain a clear audit trail for regulatory compliance."
          />
        </motion.div>
        
      </div>
    </section>
  );
};

// Helper component for this page
const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    className="glass-card p-6 rounded-xl h-full"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" } }
    }}
  >
    <div className="w-12 h-12 bg-dark-bg/50 border border-glass-border rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-2xl text-primary" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);
