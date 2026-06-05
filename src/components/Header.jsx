import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-neutral-800">
      {/* Top Bar */}
      <div className="bg-accent-terracotta text-white py-1 px-4 text-center text-sm font-medium">
        Call us today: <a href="tel:09486090967" className="hover:underline">094860 90967</a>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-text-heading tracking-tight">
              Vettri Vinayaga <span className="text-accent-terracotta">Bricks</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-text-body hover:text-accent-terracotta px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#products" className="text-text-body hover:text-accent-terracotta px-3 py-2 text-sm font-medium transition-colors">Products</a>
            <a href="#contact" className="text-text-body hover:text-accent-terracotta px-3 py-2 text-sm font-medium transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
