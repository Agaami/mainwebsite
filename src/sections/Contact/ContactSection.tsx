import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import React, { useState } from 'react';

// Get the Formspree URL from your .env file
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL;

// Define types *inside* this file for simplicity
interface FormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}
type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormErrors = Partial<FormData>; // This means { name?: string, email?: string, ... }

export const ContactSection = () => {
  // --- All logic is now inside the component ---
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: 'Quantum Product',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  // ... (Your form logic: handleChange, validateForm, handleSubmit - all unchanged) ...
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('loading');
    if (!FORM_ENDPOINT) {
      console.error('VITE_FORMSPREE_URL is not defined in .env file');
      setStatus('error');
      return;
    }
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', interest: 'Quantum Product', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };
  const inputClass = (hasError: boolean) =>
    `block w-full px-0 pt-3 pb-2 text-white bg-transparent border-0 border-b-2 
    ${hasError ? 'border-red-500' : 'border-gray-500'} 
    appearance-none focus:outline-none focus:ring-0 
    ${hasError ? 'focus:border-red-500' : 'focus:border-cyan-400'} peer`;
  const labelClass = (hasError: boolean) =>
    `absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
    origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75 peer-focus:-translate-y-6 
    ${hasError ? 'peer-focus:text-red-500' : 'peer-focus:text-cyan-400'}`;

  // --- The JSX ---
  return (
    <section 
      id="contact" 
      className="w-full py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- Column 1: Info + Socials Cards --- */}
          {/* THIS IS THE FIX: Changed space-y-16 to space-y-8 */}
          <div className="space-y-6"> 
            {/* Card 1: Contact Info */}
            <motion.div
              className="text-gray-300 glass-card p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <p className="mb-4">📍Mumbai, India.</p>
              <p className="mb-4">
                Reach out to us to discuss your needs for custom AI models, data analytics, 
                or any of our enterprise products.
              </p>
              <div className="font-semibold text-white">
                Email: <a href="mailto:agaamiailabs@gmail.com" className="text-cyan-400 hover:underline">
                  agaamiailabs@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Card 2: Socials (UPDATED) */}
            <motion.div
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Follow Us</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest research, product launches, and insights.
              </p>
              <div className="flex items-center space-x-6">
                <SocialLink 
                  href="https://x.com/agaamiailabs" 
                  icon={FaTwitter} 
                  label="X (Twitter)" 
                />
                <SocialLink 
                  href="#" 
                  icon={FaLinkedin} 
                  label="LinkedIn" 
                />
                <SocialLink 
                  href="https://www.instagram.com/agaamiailabs/" 
                  icon={FaInstagram} 
                  label="Instagram" 
                />
              </div>
            </motion.div>
          </div>

          {/* --- Column 2: Form Card --- */}
          <motion.form
            onSubmit={handleSubmit}
            // lg:row-span-2 makes it span the full height of the left column
            className="w-full glass-card p-8 rounded-xl lg:row-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
            
            {/* ... (Your form fields are all unchanged) ... */}
            <div className="relative z-0 w-full mb-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass(!!errors.name)} placeholder=" " />
              <label htmlFor="name" className={labelClass(!!errors.name)}>Name</label>
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div className="relative z-0 w-full mb-6">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass(!!errors.email)} placeholder=" " />
              <label htmlFor="email" className={labelClass(!!errors.email)}>Email</label>
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="relative z-0 w-full mb-6">
              <select name="interest" value={formData.interest} onChange={handleChange} className="block w-full px-0 pt-3 pb-2 text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer">
                <option value="Quantum Product" className="bg-dark-bg">Quantum Product</option>
                <option value="Secure KYC Suite" className="bg-dark-bg">Secure KYC Suite</option>
                <option value="Investment" className="bg-dark-bg">Investment</option>
                <option value="Career" className="bg-dark-bg">Career</option>
                <option value="Other Services" className="bg-dark-bg">Other Services</option>
              </select>
              <label htmlFor="interest" className={labelClass(false)}>Interest</label>
            </div>
            <div className="relative z-0 w-full mb-6">
              <textarea name="message" value={formData.message} onChange={handleChange} className={`${inputClass(!!errors.message)} h-24`} placeholder=" " />
              <label htmlFor="message" className={labelClass(!!errors.message)}>Message</label>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === 'loading'} className="py-3 px-8 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-x-2 mx-auto">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {status !== 'loading' && <FaPaperPlane />}
              </button>
              {status === 'success' && <p className="mt-4 text-green-400">Message sent successfully!</p>}
              {status === 'error' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Helper component for the social links
const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-cyan-400 transition-colors"
  >
    <Icon className="h-7 w-7" />
  </a>
);
