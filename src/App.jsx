import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Beliefs from './components/Beliefs';
import Activities from './components/Activities';
import Opportunities from './components/Opportunities';
import FAQ from './components/FAQ';
import JoinSection from './components/JoinSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Beliefs />
        <Activities />
        <Opportunities />
        <FAQ />
        <JoinSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
