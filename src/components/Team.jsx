import React from 'react';
import ImageContainer from './ImageContainer';

import bitmap from '../assets/images/Bitmap-3.png';
import user1 from '../assets/images/user.png';
import user2 from '../assets/images/user-2.png';
import user3 from '../assets/images/user-3.png';
import user4 from '../assets/images/user-4.png';
import user5 from '../assets/images/user-5.png';

const Team = () => {
  return (
    <section className='team'>
      <div className='team-images'>
        <ImageContainer
          cls='bitmap'
          alr='jupiter-patter'
          src={bitmap}
        />

        <ImageContainer
          cls='user1'
          src={user1}
        />

        <ImageContainer
          cls='user2'
          src={user2}
        />

        <ImageContainer
          cls='user3'
          src={user3}
        />

        <ImageContainer
          cls='user4'
          src={user4}
        />

        <ImageContainer
          cls='user5'
          src={user5}
        />

      </div>
      <div className='text-container '>
        <h5>Repellendus</h5>
        <h3>Temporibus quibusdam</h3>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est.
        </p>
      </div>

      <button className='button' type='button'>Our team</button>
    </section>
  );
};

export default Team;
