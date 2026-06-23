import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Premium Manufacturing
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-brand-text leading-[1.05] mb-6">
              Strong, Reliable Bricks for Your Dream Project.
            </h1>
            
            <p className="text-lg sm:text-xl text-brand-muted mb-10 leading-relaxed max-w-xl">
              Whether you're building a family home or a commercial complex, our high-performance flyash and hollow bricks provide the perfect, eco-friendly foundation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="group inline-flex justify-center items-center bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold py-4 px-8 rounded-full text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#products" 
                className="inline-flex justify-center items-center bg-white border border-gray-200 text-brand-text hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg transition-all shadow-sm hover:shadow"
              >
                View Specifications
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="./hero-bricks.png" 
              alt="Premium Floating Bricks" 
              className="relative z-10 max-w-full h-auto drop-shadow-2xl"
              style={{ maxHeight: '120%' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
