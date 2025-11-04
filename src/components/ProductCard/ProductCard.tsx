import { motion, type Variants } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
// 1. Remove useState
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { type IconType } from 'react-icons';

type ProductCardProps = {
  title: string;
  description: string;
  icon: IconType;
  redirectUrl: string;
  linkType?: 'page' | 'contact';
  delay?: number;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 100 }
  }
};

export const ProductCard = ({ 
  title, 
  description, 
  icon: Icon, 
  redirectUrl, 
  linkType = 'page', 
  delay = 0 
}: ProductCardProps) => {
  // 2. Remove isHovered state
  // const [isHovered, setIsHovered] = useState(false);

  const CardContent = () => (
    <motion.div
      // 3. Apply 'glass-card' class
      className="glass-card group relative h-72 min-h-[288px] rounded-xl overflow-hidden cursor-pointer p-6 flex flex-col justify-between"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      // 4. Remove onHoverStart/onHoverEnd
      
      // 5. Apply a faster scale animation
      whileHover={{ scale: 1.03 }}
      transition-whileHover={{ duration: 0.1, ease: "easeInOut" }}
    >
      {/* 6. REMOVE the separate motion.div for blurring */}
      
      <div className="absolute top-0 left-0 w-full h-full 
                    bg-gradient-to-t from-black/60 via-black/30 to-transparent -z-10" />

      <div className="absolute top-6 right-6 text-5xl text-cyan-400 opacity-60
                      group-hover:opacity-100 transition-opacity duration-300">
        <Icon />
      </div>

      <div className="flex flex-col justify-end h-full relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div 
          className="flex items-center gap-x-2 font-semibold text-cyan-400
                     transition-all duration-300 transform 
                     group-hover:gap-x-3 group-hover:text-purple-400"
        >
          {linkType === 'page' ? 'Learn More' : 'Get Beta'} <FaArrowRight />
        </div>
      </div>
    </motion.div>
  );

  return linkType === 'page' ? (
    <Link to={redirectUrl}>
      <CardContent />
    </Link>
  ) : (
    <HashLink smooth to={redirectUrl}>
      <CardContent />
    </HashLink>
  );
};