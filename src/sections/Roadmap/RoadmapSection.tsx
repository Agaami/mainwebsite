import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// 1. Define our milestone data
const milestoneData = [
  {
    date: "Q4 2025",
    title: "Project Kick-off",
    description: "Official launch of agaami ai labs and finalization of product blueprints for QuantumDash and KYC Suite."
  },
  {
    date: "Q1 2026",
    title: "Alpha Testing",
    description: "Internal alpha release of QuantumDash to select partners. Begin development of AI Security Suite."
  },
  {
    date: "Q2 2026",
    title: "Secure KYC Beta",
    description: "Launch of the Secure KYC Suite beta program. Gather user feedback and begin compliance audits."
  },
  {
    date: "Q4 2026",
    title: "Full Product Launch",
    description: "Public launch of QuantumDash v1.0 and Secure KYC Suite. Onboard first enterprise clients."
  }
];

// Animation for items fading in
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

export const RoadmapSection = () => {
  return (
    <section 
      id="roadmap" 
      className="w-full py-20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Path Forward
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Charting our journey from inception to the future of AI.
          </p>
        </div>

        {/* --- 2. MOBILE TIMELINE (Vertical) --- */}
        {/* This layout is shown by default and hidden on medium screens and up */}
        <div className="md:hidden">
          <div className="relative pl-6 border-l-2 border-cyan-500">
            {milestoneData.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-8"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Dot on the timeline */}
                <div className="absolute -left-[10px] w-5 h-5 bg-cyan-500 rounded-full border-4 border-dark-bg"></div>
                
                {/* Content */}
                <div className="pl-4">
                  <span className="text-sm font-semibold text-cyan-400">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- 3. DESKTOP TIMELINE (Horizontal) --- */}
        {/* This layout is hidden by default and shown as 'flex' on medium screens and up */}
        <div className="hidden md:flex relative justify-between">
          {/* The horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
          
          {/* The colored progress line (optional but cool) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-500 -translate-y-1/2" 
               style={{ width: '100%' }}></div> {/* This could be animated */}
          
          {milestoneData.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative z-10 w-1/4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Dot on the timeline */}
                <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-dark-bg"></div>
                
                {/* Content */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-cyan-400">{item.date}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};