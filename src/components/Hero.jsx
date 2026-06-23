import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-[#f4f4f5] overflow-hidden w-full pt-28 pb-0 lg:pt-0">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full h-full">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl pt-10 lg:pt-24 pb-12 lg:pb-24 z-20"
          >
            <div className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-600 uppercase mb-6">
              Premium Brick Manufacturing
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[76px] leading-[1.05] tracking-tight text-gray-900 mb-6">
              Strong, Reliable Bricks for Your Dream Project.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-sans leading-relaxed mb-10 max-w-lg">
              Whether you're building a family home or a commercial complex, our high-performance flyash and hollow bricks provide the perfect, eco-friendly foundation.
            </p>
            
            <a 
              href="#contact" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
              Get a Direct Quote
            </a>
          </motion.div>

          {/* Right Column: Floating Image Cutout */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] lg:h-full flex items-end justify-end mt-8 lg:mt-0"
          >
            {/* The image bleeds off the bottom right */}
            <img 
              src="./hero-bricks.png" 
              alt="Premium Bricks Stack" 
              className="absolute bottom-0 right-0 w-full lg:w-[120%] max-w-2xl object-contain object-bottom drop-shadow-2xl"
              style={{ maxHeight: '90%' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
