import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { IconType } from 'react-icons';

type GlassCardProps = {
  icon: IconType;
  title: string;
  description: string;
  delay?: number;
};

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

export const GlassCard = ({ icon: Icon, title, description, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col items-center text-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      {/* Small adjustment for the icon's background to be more subtle */}
      <div className="
        w-14 h-14 mb-4 rounded-full 
        flex items-center justify-center 
        bg-white/5 border border-white/10" // Simpler, more integrated background
      >
        <Icon className="text-2xl text-cyan-400" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};