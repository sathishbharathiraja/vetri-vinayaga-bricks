import React from 'react';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-corporate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4 tracking-tight">
            Industrial Specifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl">
            Precision-engineered masonry units for high-performance structural applications.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Flyash Brick Box */}
          <div className="group bg-corporate-surface border border-gray-200 flex flex-col hover:border-accent-rust transition-colors duration-300">
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-display font-bold text-text-primary">Flyash Bricks</h3>
                <span className="bg-white border border-gray-200 text-text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Solid Core
                </span>
              </div>
              
              <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                High-strength, lightweight composition utilizing Class F flyash. Optimized for load-bearing walls with exceptional thermal resistance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Compressive Strength</div>
                  <div className="text-2xl font-bold text-text-primary">75+ <span className="text-lg text-text-secondary font-normal">kg/cm²</span></div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Water Absorption</div>
                  <div className="text-2xl font-bold text-text-primary">&lt; 15%</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Dry Density</div>
                  <div className="text-2xl font-bold text-text-primary">1750 <span className="text-lg text-text-secondary font-normal">kg/m³</span></div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Dimensional Tolerance</div>
                  <div className="text-2xl font-bold text-text-primary">± 2<span className="text-lg text-text-secondary font-normal">mm</span></div>
                </div>
              </div>
            </div>
            <div className="h-48 bg-gray-100 border-t border-gray-200 flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-400 font-semibold tracking-wide uppercase text-sm">Product Render Area</span>
            </div>
          </div>

          {/* Hollow Brick Box */}
          <div className="group bg-corporate-surface border border-gray-200 flex flex-col hover:border-accent-rust transition-colors duration-300">
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-display font-bold text-text-primary">Hollow Bricks</h3>
                <span className="bg-white border border-gray-200 text-text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Cellular Core
                </span>
              </div>
              
              <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                Advanced cellular geometry engineered to minimize structural dead load while maximizing acoustic and thermal insulation.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Load Reduction</div>
                  <div className="text-2xl font-bold text-text-primary">~30%</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Thermal Resistance (R)</div>
                  <div className="text-2xl font-bold text-text-primary">0.40 <span className="text-lg text-text-secondary font-normal">m²K/W</span></div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Acoustic Insulation</div>
                  <div className="text-2xl font-bold text-text-primary">45 <span className="text-lg text-text-secondary font-normal">dB STC</span></div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Fire Rating</div>
                  <div className="text-2xl font-bold text-text-primary">4+ <span className="text-lg text-text-secondary font-normal">Hours</span></div>
                </div>
              </div>
            </div>
            <div className="h-48 bg-gray-100 border-t border-gray-200 flex items-center justify-center relative overflow-hidden">
               <span className="text-gray-400 font-semibold tracking-wide uppercase text-sm">Product Render Area</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
