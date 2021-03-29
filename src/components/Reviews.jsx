import React from 'react';

import Review from './Review';

import user1 from '../assets/images/user-6.png';
import user2 from '../assets/images/user-7.png';
import user3 from '../assets/images/user-8.png';

const Reviews = ({ cls, src, alt, title, copy }) => {
  return (
    <section className='reviews'>
      <div className='text-container'>
        <h3>Officis debitis</h3>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repella.
        </p>
      </div>

      <Review
        userImage={user1}
        post={
          '"Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"'
        }
        name='Evelyn Allen'
      />

      <Review
        userImage={user2}
        post={
          '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"'
        }
        name='Malin Quist'
      />
      <Review
        userImage={user3}
        post={
          '"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci numquam eius"'
        }
        name='Pan Su'
      />
    </section>
  );
};

export default Reviews;
