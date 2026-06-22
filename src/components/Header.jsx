import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-corporate-bg border-b border-gray-200 shadow-sm">
      {/* Corporate Top Bar */}
      <div className="bg-text-primary text-text-inverse py-1.5 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <span className="hidden sm:inline-block text-gray-400">Vettri Vinayaga Bricks — Premium Manufacturing & Direct Delivery</span>
          <span className="flex items-center gap-4">
            <span>Sales & Delivery: <a href="tel:09486090967" className="text-white hover:text-accent-rust transition-colors font-bold">094860 90967</a></span>
          </span>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center w-1/4">
            <a href="#" className="text-2xl font-display font-extrabold text-text-primary tracking-tight">
              VETTRI VINAYAGA
            </a>
          </div>
          
          {/* Navigation (Center) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10 items-center">
            <a href="#hero" className="text-text-secondary hover:text-accent-rust px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors">About</a>
            <a href="#products" className="text-text-secondary hover:text-accent-rust px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors">Products</a>
            <a href="#contact" className="text-text-secondary hover:text-accent-rust px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button (Right) */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-end w-1/4">
            <a href="#contact" className="bg-text-primary hover:bg-accent-rust text-white px-5 py-2.5 text-sm font-bold transition-colors">
              Request Quote
            </a>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
