import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoThisIsFor from './components/WhoThisIsFor';
import Services from './components/Services';
import WhatsIncluded from './components/WhatsIncluded';
import RealTalk from './components/RealTalk';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatWeDont from './components/WhatWeDont';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhoThisIsFor />
      <Services />
      <WhatsIncluded />
      <RealTalk />
      <WhatWeDont />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;