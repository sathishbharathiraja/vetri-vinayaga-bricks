import React, { useState } from 'react';
import { Send } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    materialType: 'Flyash Bricks',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I would like to request a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nMaterial: ${formData.materialType}\nQuantity: ${formData.quantity || 'Not specified'}`;
    const whatsappUrl = `https://wa.me/919486090967?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4">Request a Quote</h2>
            <p className="text-brand-muted">Fill out the form below and our team will get back to you with pricing and delivery options.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Full Name <span className="text-brand-orange">*</span></label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Phone Number <span className="text-brand-orange">*</span></label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Material Type</label>
                <select 
                  name="materialType" 
                  value={formData.materialType} 
                  onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all appearance-none"
                >
                  <option value="Flyash Bricks">Premium Flyash Bricks</option>
                  <option value="Hollow Bricks">Cellular Hollow Bricks</option>
                  <option value="Both">Both Types</option>
                  <option value="Unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-text mb-2">Estimated Quantity</label>
                <input 
                  type="text" 
                  name="quantity" 
                  value={formData.quantity} 
                  onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all"
                  placeholder="e.g. 5000 bricks"
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full flex justify-center items-center bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Request via WhatsApp
              </button>
            </div>
            <p className="text-center text-xs text-brand-muted mt-4">
              We provide direct transport and delivery to your site.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default LeadForm;
