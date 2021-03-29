import React from 'react';

import ImageContainer from './ImageContainer';
import facebookLogo from '../assets/images/Shape-purple.svg';
import twitterLogo from '../assets/images/Shape-purple-1.svg';
import instagramLogo from '../assets/images/Shape-purple-2.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='socialmedia'>
        <ImageContainer cls='logo' src={facebookLogo} alt='' />
        <ImageContainer cls='logo' src={twitterLogo} alt='' />
        <ImageContainer cls='logo' src={instagramLogo} alt='' />
      </div>

      <p>Copyright 2019. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
