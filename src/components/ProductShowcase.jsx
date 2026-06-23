import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, Weight, Maximize } from 'lucide-react';

const products = [
  {
    title: "Premium Flyash Bricks",
    badge: "Solid Core",
    description: "Solid, strong, and reliable. Engineered for building sturdy walls that maintain structural integrity and keep your home cool.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-orange mb-4" />,
    specs: [
      { label: "Strength", value: "High Durability" },
      { label: "Water Resistance", value: "Excellent" },
      { label: "Weight", value: "Solid & Heavy-Duty" },
      { label: "Shape", value: "Perfectly Even" }
    ]
  },
  {
    title: "Cellular Hollow Bricks",
    badge: "Lightweight",
    description: "Smart design with hollow centers. These bricks make walls 30% lighter while blocking out noise and maintaining comfortable room temperatures.",
    icon: <Maximize className="w-8 h-8 text-brand-orange mb-4" />,
    specs: [
      { label: "Weight", value: "30% Lighter" },
      { label: "Heat Control", value: "Keeps Rooms Cool" },
      { label: "Sound Proofing", value: "Blocks Noise" },
      { label: "Safety", value: "Highly Fire Resistant" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-brand-bg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Our Products</h2>
          <p className="text-lg text-brand-muted">
            Choose the perfect material for your next build. Meticulously engineered for performance, safety, and longevity.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {products.map((product, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-white rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                {product.icon}
                <span className="bg-gray-50 text-brand-text text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100">
                  {product.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-brand-text mb-4">{product.title}</h3>
              <p className="text-brand-muted mb-10 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {product.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="border-l-2 border-brand-orange/20 pl-4">
                    <div className="text-xs text-brand-muted uppercase tracking-wider font-semibold mb-1">{spec.label}</div>
                    <div className="text-sm font-bold text-brand-text">{spec.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProductShowcase;
