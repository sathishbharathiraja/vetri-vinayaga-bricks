import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-serif font-bold text-brand-text tracking-tight">
              VETTRI VINAYAGA
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className="text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors">About Us</a>
            <a href="#products" className="text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors">Our Products</a>
            <a href="#contact" className="text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-text p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#hero" className="block px-3 py-4 text-base font-medium text-brand-text border-b border-gray-50">About Us</a>
            <a href="#products" className="block px-3 py-4 text-base font-medium text-brand-text border-b border-gray-50">Our Products</a>
            <a href="#contact" className="block px-3 py-4 text-base font-medium text-brand-text border-b border-gray-50">Contact</a>
            <div className="mt-6 px-3">
              <a href="#contact" className="block w-full text-center bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-3 rounded-full text-base font-bold shadow-sm">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
