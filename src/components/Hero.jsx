import React from 'react';
import ImageContainer from './ImageContainer';

import facebookLogo from '../assets/images/Shape.svg';
import twitterLogo from '../assets/images/Shape-1.svg';
import instagramLogo from '../assets/images/Shape-2.svg';
import illustration from '../assets/images/illustration.svg';

const Hero = () => {
  return (
    <article className='hero'>
      <h1 className='hero-title'>Omnis Voluotas</h1>
      <p className='hero-copy'>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae.
      </p>
      <button className='button' type='button'>Explore</button>
      <ImageContainer
        cls='illustration'
        src={illustration}
      />
      <div className='logos-container'>
        <ImageContainer
          cls='logo'
          src={facebookLogo}
        />
        <ImageContainer
          cls='logo'
          src={twitterLogo}
        />
        <ImageContainer
          cls='logo'
          src={instagramLogo}
        />
      </div>
    </article>
  );
};

export default Hero;
