import React from 'react';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-corporate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4 tracking-tight">
            Our Products
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl">
            Choose the perfect brick for your building needs.
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
                Solid, strong, and reliable. Our flyash bricks are perfect for building sturdy walls that keep your home cool in the summer and safe year-round.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Strength</div>
                  <div className="text-2xl font-bold text-text-primary">High Durability</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Water Resistance</div>
                  <div className="text-2xl font-bold text-text-primary">Excellent</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Weight</div>
                  <div className="text-2xl font-bold text-text-primary">Solid & Heavy-Duty</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Shape</div>
                  <div className="text-2xl font-bold text-text-primary">Perfectly Even</div>
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
                Smart design with hollow centers. These bricks make your walls lighter, block out outside noise, and maintain comfortable room temperatures.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Weight</div>
                  <div className="text-2xl font-bold text-text-primary">30% Lighter</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Heat Control</div>
                  <div className="text-2xl font-bold text-text-primary">Keeps Rooms Cool</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Sound Proofing</div>
                  <div className="text-2xl font-bold text-text-primary">Blocks Noise</div>
                </div>
                <div className="border-l-2 border-accent-rust pl-4">
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-semibold mb-1">Safety</div>
                  <div className="text-2xl font-bold text-text-primary">Highly Fire Resistant</div>
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
