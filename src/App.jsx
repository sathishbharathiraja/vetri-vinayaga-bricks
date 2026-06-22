import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-corporate-bg text-text-primary font-sans selection:bg-accent-rust selection:text-white">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
