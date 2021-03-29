import React from 'react';

const ImageContainer = ({ cls, src, alt }) => {
  return (
    <figure className={cls}>
      <picture>
        <img src={src} alt={alt} loading='lazy' />
      </picture>
    </figure>
  );
};

export default ImageContainer;
