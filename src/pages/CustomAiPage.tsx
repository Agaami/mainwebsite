// src/pages/CustomAiPage.tsx
import { motion } from 'framer-motion';
import { FaServer, FaBrain, FaCogs, FaProjectDiagram } from 'react-icons/fa';
import { useEnterpriseForm } from '../hooks/useEnterpriseForm';

// Helper component for this page
const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-dark-bg/50 border border-glass-border rounded-lg flex items-center justify-center">
        <Icon className="text-2xl text-primary" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

// Helper component for this page
const TechPill = ({ text }: { text: string }) => (
  <span className="text-xs font-medium text-cyan-300 bg-cyan-900/50 border border-cyan-800 rounded-full px-3 py-1">
    {text}
  </span>
);

export const CustomAiPage = () => {
  const { formData, status, errors, handleChange, handleCheckboxChange, handleSubmit } = useEnterpriseForm();

  return (
    <section className="w-full min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* --- Header --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Custom AI & Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From custom-trained LLMs to on-premise computer vision models,
            we build bespoke AI solutions that integrate directly into your workflow.
          </p>
        </motion.div>

        {/* --- 2-Column Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Column 1: Features & Tech --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">What We Offer</h2>
            <div className="space-y-8">
              <FeatureItem
                icon={FaBrain}
                title="Custom Model Training"
                description="Bespoke models for NLP, Computer Vision, Predictive Analytics, and Generative AI, trained on your data."
              />
              <FeatureItem
                icon={FaServer}
                title="On-Premise & Hybrid Deployment"
                description="Full support for on-premise or private cloud deployment (AWS, Azure, GCP) to meet your data privacy needs."
              />
              <FeatureItem
                icon={FaProjectDiagram}
                title="Full API & System Integration"
                description="Seamlessly integrate our AI models into your existing applications, ERPs, and data pipelines."
              />
              <FeatureItem
                icon={FaCogs}
                title="MLOps & Continuous Monitoring"
                description="We manage the full lifecycle, including model versioning, monitoring for drift, and continuous retraining."
              />
            </div>

            <h2 className="text-3xl font-bold text-white mt-16 mb-8">Core Technologies</h2>
            <div className="flex flex-wrap gap-3">
              <TechPill text="PyTorch" />
              <TechPill text="TensorFlow" />
              <TechPill text="Kubernetes" />
              <TechPill text="Docker" />
              <TechPill text="FastAPI" />
              <TechPill text="AWS Sagemaker" />
              <TechPill text="Azure ML" />
              <TechPill text="GCP Vertex AI" />
              <TechPill text="PostgreSQL" />
            </div>
          </motion.div>

          {/* --- Column 2: The Enterprise Form --- */}
          <motion.div
            className="glass-card p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Get a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                <Input label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} error={errors.companyName} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Work Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <Input label="Phone Number (Optional)" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select label="Industry" name="industry" value={formData.industry} onChange={handleChange}>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>E-commerce</option>
                  <option>Technology</option>
                  <option>Other</option>
                </Select>
                <Select label="Deployment" name="deployment" value={formData.deployment} onChange={handleChange}>
                  <option>Cloud (SaaS)</option>
                  <option>On-Premise</option>
                  <option>Hybrid</option>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Model of Interest (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  <Checkbox label="NLP (Text)" name="modelType" value="NLP" onChange={handleCheckboxChange} />
                  <Checkbox label="Computer Vision" name="modelType" value="Computer Vision" onChange={handleCheckboxChange} />
                  <Checkbox label="Predictive" name="modelType" value="Predictive" onChange={handleCheckboxChange} />
                  <Checkbox label="Generative AI" name="modelType" value="Generative AI" onChange={handleCheckboxChange} />
                </div>
              </div>
              
              <Textarea label="Project Description" name="description" value={formData.description} onChange={handleChange} error={errors.description} />
              
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold 
                             bg-gradient-to-r from-purple-500 to-cyan-500
                             hover:shadow-lg hover:shadow-purple-500/50
                             disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Request'}
                </button>
                {status === 'success' && <p className="mt-4 text-green-400">Request received! We will contact you shortly.</p>}
                {status === 'error' && <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>}
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// --- Form Helper Components ---
const Input = ({ label, name, type = 'text', value, onChange, error }: any) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-2.5 bg-dark-bg/50 border ${error ? 'border-red-500' : 'border-glass-border'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary`}
    />
    {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
  </div>
);

const Select = ({ label, name, value, onChange, children }: any) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 bg-dark-bg/50 border border-glass-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {children}
    </select>
  </div>
);

const Checkbox = ({ label, name, value, onChange }: any) => (
  <label className="flex items-center gap-2 p-2 bg-dark-bg/50 border border-glass-border rounded-lg cursor-pointer hover:bg-white/10">
    <input
      type="checkbox"
      name={name}
      value={value}
      onChange={onChange}
      className="h-4 w-4 text-primary bg-dark-bg/50 border-glass-border rounded focus:ring-primary"
    />
    <span className="text-sm text-gray-300">{label}</span>
  </label>
);

const Textarea = ({ label, name, value, onChange, error }: any) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className={`w-full p-2.5 bg-dark-bg/50 border ${error ? 'border-red-500' : 'border-glass-border'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary`}
    />
    {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
  </div>
);