import React from 'react';

import Item from './Item';
import circle from '../assets/images/circle.svg';
import papper from '../assets/images/papper.svg';
import stats from '../assets/images/stats.svg';
import clock from '../assets/images/clock.svg';
import atom from '../assets/images/atom.svg';
import pen from '../assets/images/pen.svg';

const Products = () => {
  return (
    <section className='services'>
      <div className='text-container'>
        <h2>Fugiat quo</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>

      <Item
        cls='product-item'
        src={circle}
        alt='Consequuntur'
        title='Consequuntur'
        copy='Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
      />
    </section>
  );
};

export default Products;
