import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-serif font-bold text-brand-text mb-4">VETTRI VINAYAGA</h3>
            <p className="text-sm text-brand-muted mb-4 leading-relaxed">
              Premium flyash and cellular hollow brick manufacturing. Building a stronger, more sustainable tomorrow.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-text mb-4">Contact</h4>
            <address className="not-italic text-sm text-brand-muted leading-relaxed mb-4">
              53VR+M4, Keerambur Medu<br/>
              Tamil Nadu 637207<br/>
              India
            </address>
            <a href="tel:09486090967" className="text-sm text-brand-text font-semibold hover:text-brand-orange transition-colors">
              +91 94860 90967
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-text mb-4">Location</h4>
            <div className="h-48 w-full rounded-xl overflow-hidden border border-gray-100 bg-gray-50 relative">
              <iframe 
                src="https://maps.google.com/maps?q=11.1940969,78.0902944&z=15&output=embed" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0, filter: "contrast(1.05) grayscale(0.2)" }} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                title="Vettri Vinayaga Manufacturing Unit Location"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {currentYear} Vettri Vinayaga Bricks. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-muted">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
