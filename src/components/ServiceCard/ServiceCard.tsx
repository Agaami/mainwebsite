import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { IconType } from 'react-icons';

type ServiceCardProps = {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
};

// Animation variant for the card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

export const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      // We'll reuse our global 'glass-card' style for consistency
      className="glass-card p-6 flex flex-col items-start text-left"
      variants={cardVariants}
      initial="hidden"
      // Triggers animation when it scrolls into view
      whileInView="visible"
      // Only animates once
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ delay }} // Apply the staggered delay
    >
      {/* Icon */}
      <div className="w-14 h-14 mb-5 rounded-lg 
                      flex items-center justify-center 
                      bg-white/5 border border-white/10"
      >
        <Icon className="text-3xl text-purple-400" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};