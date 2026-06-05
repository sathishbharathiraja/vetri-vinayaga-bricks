import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', product: '', quantity: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919486090967';
    const message = `🏗️ *New Brick Order Request* 🏗️\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `🚚 *Delivery Address:* ${formData.address}\n` +
        `🏭 *Product:* ${formData.product}\n` +
        `📊 *Quantity:* ${formData.quantity} pieces\n` +
        `📝 *Requirements:* ${formData.message || 'None'}\n\n` +
        `📍 *Vettri Vinayaga Flyash Bricks & Hollow Bricks*\n` +
        `🏠 *Office:* 53VR+M4, Keerambur Medu, Tamil Nadu 637207`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({name: '', phone: '', email: '', address: '', product: '', quantity: '', message: ''});
    alert('Quote request prepared in WhatsApp!');
  };

  return (
    <footer id="contact" className="bg-[#121212] pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Details & Map */}
          <div>
            <h2 className="text-3xl font-bold text-text-heading mb-8 uppercase tracking-wide">Contact Us</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-accent-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold mb-1">Head Office</h4>
                  <p className="text-neutral-400">53VR+M4, Keerambur Medu<br/>Tamil Nadu 637207</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-accent-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold mb-1">Direct Line</h4>
                  <p className="text-neutral-400">094860 90967</p>
                </div>
              </div>
            </div>

            {/* Placeholder Map iframe area */}
            <div className="bg-neutral-900 border border-neutral-800 h-64 w-full flex items-center justify-center">
              <span className="text-neutral-500 uppercase tracking-widest text-sm">[ Google Maps Embed Area ]</span>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-dark-card border border-neutral-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Phone</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Email</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Delivery Address</label>
                <textarea name="address" required rows="2" value={formData.address} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors"></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Product</label>
                  <select name="product" required value={formData.product} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors appearance-none">
                    <option value="">Select...</option>
                    <option value="Flyash Bricks">Flyash Bricks</option>
                    <option value="Hollow Bricks">Hollow Bricks</option>
                    <option value="Solid Bricks">Solid Bricks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Quantity</label>
                  <input type="number" name="quantity" required min="1" value={formData.quantity} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">Requirements</label>
                <textarea name="message" rows="2" value={formData.message} onChange={handleChange} className="w-full bg-neutral-900 border border-neutral-800 text-white p-3 focus:outline-none focus:border-accent-terracotta transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent-terracotta hover:bg-accent-terracottaHover text-white font-bold uppercase tracking-widest py-4 transition-colors duration-200 mt-2">
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Vettri Vinayaga Bricks. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-accent-terracotta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-terracotta transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
