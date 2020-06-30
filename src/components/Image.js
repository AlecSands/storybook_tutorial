import React from 'react';
// import './ImageCard.scss';

function ImageCard({ image: { id, title, state, image }, onClickImage }) {
  return (
    <div className={`ImageCard ${state}`} onClick={() => onClickImage(id)}>
      <img src={image} className="Image" alt={title} />
    </div>
  );
}

export default ImageCard;
