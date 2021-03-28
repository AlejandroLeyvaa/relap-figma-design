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
        <h3>Fugiat quo</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>

      <Item
        cls='item-img'
        src={circle}
        alt='Consequuntur'
        title='Consequuntur'
        copy='Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
      />

      <Item
        cls='item-img'
        src={papper}
        alt='Voluptatem'
        title='Voluptatem'
        copy='Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam'
      />

      <Item
        cls='item-img'
        src={stats}
        alt='Quisquam'
        title='Quisquam'
        copy='Quis nostrum exercitationem ullam corporis suscipit laboriosam'
      />

      <Item
        cls='item-img'
        src={clock}
        alt='Aliquid'
        title='Aliquid'
        copy='Quis autem vel eum iure reprehenderit voluptate velit esse quam nihil'
      />

      <Item
        cls='item-img'
        src={atom}
        alt='Excepteur'
        title='Excepteur'
        copy='Sint occaecat cupidatat non proident culpa qui officia deserunt mollit anim'
      />

      <Item
        cls='item-img'
        src={pen}
        alt='Accusamus'
        title='Accusamus'
        copy='Odio dignissimos ducimus qui blanditiis praesentium voluptatum'
      />
    </section>
  );
};

export default Products;
