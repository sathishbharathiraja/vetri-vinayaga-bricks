import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', address: '', product: '', quantity: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '919486090967';
    const message = `🏢 *Corporate Order Inquiry* 🏢\n\n` +
        `👤 *Contact Name:* ${formData.name}\n` +
        `💼 *Company/Project:* ${formData.company || 'N/A'}\n` +
        `📞 *Direct Line:* ${formData.phone}\n` +
        `📧 *Corporate Email:* ${formData.email}\n` +
        `🚚 *Site Address:* ${formData.address}\n` +
        `🏭 *Material Required:* ${formData.product}\n` +
        `📊 *Volume (pieces):* ${formData.quantity}\n` +
        `📝 *Technical Requirements:* ${formData.message || 'Standard'}\n\n` +
        `📍 *Vettri Vinayaga Manufacturing Unit*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({name: '', phone: '', email: '', company: '', address: '', product: '', quantity: '', message: ''});
  };

  return (
    <footer id="contact" className="bg-[#0F172A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Corporate Details & Map (7 columns) */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-display font-bold text-white mb-10 tracking-tight">Global Infrastructure Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-accent-rust font-bold uppercase tracking-widest text-sm mb-4">Corporate Headquarters</h4>
                <address className="not-italic text-gray-300 leading-relaxed">
                  53VR+M4, Keerambur Medu<br/>
                  Tamil Nadu 637207<br/>
                  India
                </address>
              </div>
              
              <div>
                <h4 className="text-accent-rust font-bold uppercase tracking-widest text-sm mb-4">Direct Communication</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-500 mr-2">Sales:</span> +91 94860 90967</p>
                  <p><span className="text-gray-500 mr-2">Email:</span> corporate@vettrivinayaga.com</p>
                  <p><span className="text-gray-500 mr-2">Hours:</span> Mon-Sat, 09:00 - 18:00 IST</p>
                </div>
              </div>
            </div>

            {/* Premium Map Embed */}
            <div className="bg-[#1E293B] border border-[#334155] h-72 w-full flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">[ Interactive Map Area ]</span>
              <div className="absolute bottom-4 left-4 bg-[#0F172A] px-3 py-1 border border-[#334155] text-xs text-gray-400">GPS: 11.2341° N, 78.1234° E</div>
            </div>
          </div>

          {/* Corporate Quote Form (5 columns) */}
          <div className="lg:col-span-5 bg-[#1E293B] border border-[#334155] p-10">
            <h3 className="text-2xl font-display font-bold text-white mb-8">Request Corporate Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Direct Phone</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Work Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Project Site Address</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Material</label>
                  <select name="product" required value={formData.product} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors appearance-none">
                    <option value="">Select Option...</option>
                    <option value="Flyash Bricks">Class F Flyash Bricks</option>
                    <option value="Hollow Bricks">Cellular Hollow Bricks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Volume (Pieces)</label>
                  <input type="number" name="quantity" required min="1000" step="500" value={formData.quantity} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors" placeholder="Min. 1000" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Technical Specifications / Notes</label>
                <textarea name="message" rows="2" value={formData.message} onChange={handleChange} className="w-full bg-[#0F172A] border border-[#334155] text-white px-4 py-3 focus:outline-none focus:border-accent-rust transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent-rust hover:bg-accent-rustHover text-white font-bold uppercase tracking-widest py-4 transition-colors duration-200 mt-4">
                Initiate Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Enterprise Legal Links */}
        <div className="border-t border-[#334155] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vettri Vinayaga Manufacturing Pvt. Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Corporate Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Supplier Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
