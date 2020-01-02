import React, { useState } from 'react';
import { css } from '@emotion/core';
import Img from "gatsby-image"

const galleryContainerStyles = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .item {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    background-color: grey;
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
  z-index: 1;
`;

const Gallery = ({ imageData }) => {
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
  console.log('image', imageData[0].imageFile.asset.fixed.src);
  return (
    <>
      <div css={[lightbox, lightboxDisplay]} onClick={() => { toggleLightbox(!lightboxOpen) }} />

      <div css={galleryContainerStyles} >
        {imageData.map(image => (
          <div onClick={() => { triggerLightbox(1) }} >
            <Img className='item' fixed={image.imageFile.asset.fixed} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;