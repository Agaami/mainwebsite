import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import { GlassCard } from '../../components/GlassCard/GlassCard';

export const VisionMission = () => {
  return (
    <section 
      id="vision" 
      className="w-full py-20" // 1. Reduced padding from py-24 to py-20
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12"> {/* 2. Reduced margin from mb-16 to mb-12 */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4"> {/* 3. Reduced size */}
            Our Foundation
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"> {/* 4. Reduced size */}
            Guiding principles that define our purpose and shape our future.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* 5. Reduced gap from 8 to 6 */}
          
          <GlassCard
            icon={FaEye}
            title="Our Vision"
            description="To be the leading innovator in artificial intelligence, creating solutions that redefine industries and enhance human potential."
            delay={0}
          />

          <GlassCard
            icon={FaBullseye}
            title="Our Mission"
            description="To build robust, scalable, and secure enterprise-grade AI products that solve real-world problems and deliver measurable value."
            delay={0.2}
          />

          <GlassCard
            icon={FaHeart}
            title="Core Values"
            description="Innovation, Integrity, and Impact. We pursue cutting-edge research, operate with transparency, and aim to make a positive mark."
            delay={0.4}
          />
          
        </div>
      </div>
    </section>
  );
};