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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrolled} />
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