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

`;

const lightbox = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.95);
  z-index: 1;

  .lightbox-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container {
    width: 900px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Gallery = ({ imageData }) => {
  const [lightboxOpen, toggleLightbox] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState({});

  let lightboxDisplay = css`
    display: ${lightboxOpen ? 'flex' : 'none'};
  `;
  
  //accepts object to inject the lightbox with the appropriate fluid imag source
  const triggerLightbox = (fluid) => {
    setLightboxSrc(fluid);
    toggleLightbox(!lightboxOpen);
  }

  return (
    <>
      <div css={[lightbox, lightboxDisplay]} onClick={() => { toggleLightbox(!lightboxOpen) }} >
        <div className='lightbox-inner'>
          <div className='img-container'>
            <Img fluid={lightboxSrc} />
          </div>
        </div>
      </div>

      <div css={galleryContainerStyles} >
        {imageData.map(image => (
          <div onClick={() => { triggerLightbox(image.imageFile.asset.fluid) }} >
            <Img className='item' fixed={image.imageFile.asset.fixed} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;