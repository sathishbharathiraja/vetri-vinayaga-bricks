import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10M+", label: "BRICKS MANUFACTURED" },
  { value: "100%", label: "QUALITY GUARANTEED" },
  { value: "IS 1077", label: "STRUCTURAL STANDARDS" },
  { value: "Eco", label: "FRIENDLY PROCESS" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const StatsBand = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-serif text-brand-text mb-2">{stat.value}</span>
              <span className="text-xs font-bold text-brand-muted uppercase tracking-[0.15em]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBand;
