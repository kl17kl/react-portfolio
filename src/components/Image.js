import React from 'react';

const Image = ({
    src,
    fallback,
    className,
    onLoad,
    type = 'image/webp',
    ...delegated
  }) => {
    return (
      <picture>
        <source className={className} srcSet={src} type={type} draggable='false' onLoad={onLoad} />
        <img className={className} src={fallback} {...delegated} loading='eager' draggable='false' onLoad={onLoad} />
      </picture>
    );
};

export default Image;