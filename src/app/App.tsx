import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { NorkaInfo } from './components/NorkaInfo';
import { Insurance } from './components/Insurance';
import { Eligibility } from './components/Eligibility';
import { WelfareBenefits } from './components/WelfareBenefits';
import { Documents } from './components/Documents';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import '../styles/fonts.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-[#C9A227] selection:text-[#0A3D62]">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <NorkaInfo />
        <Insurance />
        <Eligibility />
        <WelfareBenefits />
        <Documents />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
