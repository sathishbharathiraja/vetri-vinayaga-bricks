import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About Us', href: '#hero' },
  { name: 'Our Products', href: '#products' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 pt-6 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-sans font-bold text-gray-900 text-xl tracking-tight">
              VETTRI VINAYAGA<span className="text-orange-600">.</span>
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-orange-600 text-white rounded-full px-5 py-2 text-sm font-bold shadow-sm hover:bg-orange-700 transition-colors"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 hover:text-orange-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center bg-orange-600 text-white rounded-full px-5 py-3 text-base font-bold shadow-sm"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
