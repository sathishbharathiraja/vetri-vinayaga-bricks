import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 lg:pt-28 min-h-screen flex items-center bg-dark-bg">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[70vh] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
          
          {/* Content Side */}
          <div className="bg-dark-card p-12 lg:p-20 flex flex-col justify-center">
            <div className="uppercase tracking-widest text-sm text-accent-terracotta font-bold mb-4">
              Premium Quality
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading leading-tight mb-6">
              Best Building<br/>Materials Provider
            </h1>
            <p className="text-lg text-text-body mb-10 max-w-lg">
              Engineered for the future. Eco-friendly manufacturing, superior strength, and unmatched durability for modern construction in Tamil Nadu.
            </p>
            <div>
              <a 
                href="#contact" 
                className="inline-block bg-accent-terracotta hover:bg-accent-terracottaHover text-white font-semibold py-4 px-8 rounded-none transition-colors duration-200"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-64 md:h-auto hidden md:block">
            {/* Using a placeholder since we don't have the original image asset locally imported yet */}
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
              <img 
                src="hero-bg.png" 
                alt="Modern brick architecture" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-neutral-500 font-medium tracking-widest uppercase">Brick Architecture</span>';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
