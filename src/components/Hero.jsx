import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-corporate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="text-accent-rust text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Industrial Manufacturing
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-text-primary leading-[1.1] mb-6">
              Engineered for the Future of Construction.
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-normal">
              High-performance flyash and hollow bricks designed for structural integrity, extreme durability, and eco-friendly compliance. Built for enterprise-scale projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center bg-accent-rust hover:bg-accent-rustHover text-white font-bold py-4 px-8 text-lg transition-colors duration-200"
              >
                Request Corporate Quote
              </a>
              <a 
                href="#products" 
                className="inline-flex justify-center items-center bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-white font-bold py-4 px-8 text-lg transition-colors duration-200"
              >
                View Technical Specs
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 h-[400px] lg:h-[600px] bg-corporate-surface relative flex items-center justify-center overflow-hidden border border-gray-200">
            <img src="./hero-bricks.png" alt="Premium Stack of Flyash and Hollow Bricks" className="w-full h-full object-cover object-center" />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-b border-gray-200 pt-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <svg className="w-10 h-10 text-text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span className="text-text-primary font-bold text-sm tracking-wide uppercase">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <svg className="w-10 h-10 text-text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-text-primary font-bold text-sm tracking-wide uppercase">Eco-Friendly Compliance</span>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <svg className="w-10 h-10 text-text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              <span className="text-text-primary font-bold text-sm tracking-wide uppercase">IS 1077 Structural Standards</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
