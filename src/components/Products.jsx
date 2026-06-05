import React from 'react';

const Products = () => {
  const products = [
    {
      title: "Flyash Bricks",
      description: "High-strength, lightweight bricks with excellent thermal properties and environmental benefits.",
      specs: ["Compressive strength: 75+ kg/cm²", "Water absorption: < 15%", "Dimensional accuracy"],
      image: "flyash-brick.png"
    },
    {
      title: "Hollow Bricks",
      description: "Innovative hollow design for superior insulation and reduced structural weight.",
      specs: ["Lightweight construction", "Thermal insulation", "Cost-effective"],
      image: "hollow-brick.png"
    }
  ];

  return (
    <section id="products" className="py-24 bg-dark-bg border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading uppercase tracking-wide">
            Industrial Products
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent-terracotta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-dark-card border border-neutral-800 p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle hover bottom border effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              <div className="mb-6 h-48 bg-neutral-900 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-h-full object-contain p-4 opacity-80 mix-blend-screen"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-neutral-600 text-sm tracking-widest uppercase">Product Image</span>';
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-text-heading mb-4">{product.title}</h3>
              <p className="text-text-body flex-grow mb-6">{product.description}</p>
              
              <ul className="space-y-2 mb-8">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center text-sm text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-accent-terracotta rounded-full mr-3"></span>
                    {spec}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-block text-accent-terracotta font-semibold uppercase tracking-wider text-sm hover:text-accent-terracottaHover transition-colors mt-auto"
              >
                Inquire Now &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
