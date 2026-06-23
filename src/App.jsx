import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import ProductShowcase from './components/ProductShowcase';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-brand-bg min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <StatsBand />
        <ProductShowcase />
        <LeadForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
