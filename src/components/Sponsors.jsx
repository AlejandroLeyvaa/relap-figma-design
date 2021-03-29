import React from 'react';
import ImageContainer from './ImageContainer';

import sponsor1 from '../assets/images/sponsor.svg';
import sponsor2 from '../assets/images/sponsor-1.svg';
import sponsor3 from '../assets/images/sponsor-3.svg';
import sponsor4 from '../assets/images/sponsor-2.svg';
import sponsor5 from '../assets/images/sponsor-4.svg';
import sponsor6 from '../assets/images/sponsor-5.svg';

const Sponsors = () => {
  return (
    <section className='sponsors'>
      <ImageContainer
        cls='sponsor'
        src={sponsor1}
        alt='sponsor-logo'
      />

      <ImageContainer
        cls='sponsor'
        src={sponsor2}
        alt='sponsor-logo'
      />

      <ImageContainer
        cls='sponsor'
        src={sponsor3}
        alt='sponsor-logo'
      />

      <ImageContainer
        cls='sponsor'
        src={sponsor4}
        alt='sponsor-logo'
      />

      <ImageContainer
        cls='sponsor'
        src={sponsor5}
        alt='sponsor-logo'
      />

      <ImageContainer
        cls='sponsor'
        src={sponsor6}
        alt='sponsor-logo'
      />

    </section>
  );
};

export default Sponsors;
