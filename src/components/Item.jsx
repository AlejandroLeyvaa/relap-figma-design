import React from 'react';
import ImageContainer from './ImageContainer';

const Item = ({ cls, src, alt, title, copy }) => {
  return (
    <article className='item'>
      <ImageContainer cls={cls} src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{copy}</p>
    </article>
  );
};

export default Item;
