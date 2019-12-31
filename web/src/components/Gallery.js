import React, { useState } from 'react';
import { css } from '@emotion/core';

const galleryContainerStyles = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .item {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    background-color: green;
    margin: 10px;
  }

  @media (max-width: 550px) {
    .item {
      width: 100%;
      height: auto;
    }
  }
`;

const lightbox = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.95);
`;

const Gallery = () => {
  const [lightboxOpen, toggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  let lightboxDisplay = css`
    display: ${lightboxOpen ? 'block' : 'none'};
  `;

  const triggerLightbox = (index) => {
    setPhotoIndex(index);
    console.log(index);
    toggleLightbox(!lightboxOpen);
  }

  return (
    <>
      <div css={[lightbox, lightboxDisplay]} onClick={() => { toggleLightbox(!lightboxOpen) }} />
      <div css={galleryContainerStyles} >
        <div className='item' onClick={() => { triggerLightbox(1) }} >
          4
        </div>
        <div className='item' onClick={() => { triggerLightbox(2) }} >
          5
        </div>
        <div className='item' onClick={() => { triggerLightbox(3) }} >
          6
        </div>
        <div className='item' onClick={() => { triggerLightbox(4) }} >
          7
        </div>
        <div className='item' onClick={() => { triggerLightbox(5) }} >
          8
        </div>
      </div>
    </>
  );
};

export default Gallery;