import React from 'react';
import ImageContainer from './ImageContainer';

import patter1 from '../assets/images/Bitmap.png';
import patter2 from '../assets/images/Bitmap-1.png';
import patter3 from '../assets/images/Bitmap-2.png';

const ArtSection = () => {
  return (
    <section className='art'>
      <h5>NISI UT ALIQUID</h5>
      <h3 className='art-title'>Ullam corporis susci</h3>
      <p className='art-copy'>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>

      <ul className='list'>
        <li>Quis Autem</li>
        <li>Reprehenderit</li>
        <li>Voluptate</li>
        <li>Molestiae</li>
        <li>Consequatur</li>
      </ul>

      <ul>
        <ImageContainer cls='art-patter' src={patter1} />
        <ImageContainer cls='art-patter' src={patter2} />
        <ImageContainer cls='art-patter' src={patter3} />
      </ul>

      <div className='button-container'>
        <button className='button' type='button'>
          All works
        </button>
      </div>
    </section>
  );
};

export default ArtSection;
