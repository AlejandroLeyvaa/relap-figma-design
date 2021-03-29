import React from 'react';

import ImageContainer from './ImageContainer';
import image from '../assets/images/Bitmap-4.png';
import user from '../assets/images/user-9.png';

const About = () => {
  return (
    <section className='about'>
      <h5>Nisi ut aliquid</h5>
      <h3>Omnis voluptas assumenda</h3>
      <p>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est.
      </p>
      <button className='button' type='button'>
        Our blog
      </button>

      <div className='image-container'>
        <ImageContainer cls='bitmap' src={image} alt='somebody seeing the light of the night city' />
        <div className='text-container'>
          <h4>Itaque earum rerum</h4>
          <p>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates
          </p>
          <div className='user-container'>
            <ImageContainer cls='' src={user} alt='' />
            <p>Adaora Azubuike</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
