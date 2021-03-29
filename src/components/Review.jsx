import React from 'react';
import ImageContainer from './ImageContainer';

const Review = ({ userImage, post, name }) => {
  return (
    <article className='reviews-item'>
      <ImageContainer
        cls='user'
        src={userImage}
        alt='user review avatar'
      />
      <p className='reviews-text'>{post}</p>
      <p className='reviews-name'>{name}</p>
    </article>
  );
};
export default Review;
