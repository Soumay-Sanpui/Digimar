import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ClientBar from './components/ClientBar';
import AboutSection from './components/sections/AboutSection';
import TestimonialSection from './components/sections/TestimonialSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <main className='font-inter text-[1.2vw]'>
      <HeroSection />
      <ClientBar />
      <AboutSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
