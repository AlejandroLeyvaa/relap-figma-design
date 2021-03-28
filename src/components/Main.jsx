import React from 'react';

import Presentation from './Presentation';
import Services from './Services';
import ArtSection from './ArtSection';
import Team from './Team';
import Reviews from './Reviews';
import Sponsors from './Sponsors';
import About from './About';

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
    </main>
  );
};

export default Main;
