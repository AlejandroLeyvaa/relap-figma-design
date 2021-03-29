import React from 'react';

import Presentation from './Presentation';
import Services from './Services';
import ArtSection from './ArtSection';
import Team from './Team';
import Reviews from './Reviews';
import Sponsors from './Sponsors';
import About from './About';
import Contact from './Contact';

const Main = () => {
  return (
    <main className='main'>
      <Presentation />
      <ArtSection />
      <Services />
      <Team />
      <Reviews />
      <Sponsors />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
