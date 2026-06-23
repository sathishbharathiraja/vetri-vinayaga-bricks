import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import ProductShowcase from './components/ProductShowcase';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-[#f4ece1] min-h-screen p-3 sm:p-4 md:p-6 overflow-x-hidden">
      <div className="bg-brand-bg rounded-[2rem] sm:rounded-[2.5rem] min-h-[calc(100vh-1.5rem)] shadow-2xl relative flex flex-col overflow-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <StatsBand />
          <ProductShowcase />
          <LeadForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
