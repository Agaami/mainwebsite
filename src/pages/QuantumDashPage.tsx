import { motion } from 'framer-motion';
import { FaArrowRight, FaFileUpload, FaMagic, FaShieldAlt, FaChartBar, FaBuilding } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link'; // 1. Import HashLink

// Get the subdomain URL from our .env file
const QUANTUMDASH_URL = import.meta.env.VITE_PRODUCT_URL_QUANTUMDASH;

export const QuantumDashPage = () => {
  return (
    <section className="w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* --- Header --- */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Quantum Dash
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The <strong>Community Edition</strong> analytics platform. Stop guessing and start knowing.
            Upload your data (CSV, Excel, JSON) and let our AI provide automated
            insights, data cleaning, and visualizations instantly.
          </p>
          <a
            href={QUANTUMDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 py-3 px-8 rounded-lg 
                       text-white font-semibold 
                       bg-gradient-to-r from-purple-500 to-cyan-500
                       hover:shadow-lg hover:shadow-purple-500/50"
          >
            Launch Dashboard <FaArrowRight />
          </a>
        </motion.div>

        {/* --- Key Features (Restored) --- */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Features at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={FaFileUpload}
              title="Easy Data Upload"
              description="Simply drag and drop your CSV, XLSX, or JSON files to get started."
            />
            <FeatureCard
              icon={FaMagic}
              title="Automated Cleaning"
              description="Handle missing values, remove duplicates, and standardize data with one click."
            />
            <FeatureCard
              icon={FaChartBar}
              title="AI-Powered Insights"
              description="Our LLM analyzes your data and provides key statistics and actionable insights."
            />
            <FeatureCard
              icon={FaShieldAlt}
              title="Secure & Private"
              description="Your data is processed securely and is never stored long-term (Community Ver.)"
            />
          </div>
        </div>

        {/* --- Tech Stack (Restored) --- */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Technology
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Built with modern, high-performance tools to deliver results fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TechPill text="React" />
            <TechPill text="Vite" />
            <TechPill text="Tailwind CSS" />
            <TechPill text="Python" />
            <TechPill text="FastAPI" />
            <TechPill text="PostgreSQL" />
            <TechPill text="Llama 3.1" />
          </div>
        </div>

        {/* --- Enterprise Section (With HashLink Fix) --- */}
        <div className="mt-24">
          <motion.div
            className="glass-card rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">
              <FaBuilding className="text-7xl text-purple-400" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">
                Need an Enterprise Solution?
              </h3>
              <p className="text-gray-300">
                Get the <strong>Enterprise Model</strong> for on-premise deployment,
                custom model training, dedicated support, and advanced security features
                for your organization.
              </p>
            </div>
            <div className="flex-shrink-0">
              {/* 2. Use HashLink here and add 'smooth' prop */}
              <HashLink
                smooth
                to="/#contact"
                className="inline-flex items-center gap-x-2 py-3 px-8 rounded-lg 
                           text-white font-semibold 
                           bg-gradient-to-r from-purple-500 to-pink-500
                           hover:shadow-lg hover:shadow-purple-500/50"
              >
                Get Beta for your Organization
              </HashLink>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

// --- Helper Components (Restored) ---
const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="glass-card p-6 rounded-xl h-full">
    <div className="w-12 h-12 bg-dark-bg/50 border border-glass-border rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-2xl text-primary" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TechPill = ({ text }: { text: string }) => (
  <span className="text-sm font-medium text-cyan-300 bg-cyan-900/50 border border-cyan-800 rounded-full px-4 py-1">
    {text}
  </span>
);