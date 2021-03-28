import React from 'react';
import ImageContainer from './ImageContainer';

const Item = ({ cls, src, alt, title, copy }) => {
  return (
    <article className='product-item'>
      <ImageContainer cls={cls} src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{copy}</p>
    </article>
  );
};

export default Item;
