import React, { useState } from 'react';
import { css } from '@emotion/core';
import Img from "gatsby-image"
import PropTypes from "prop-types"


const Gallery = ({ imageData, height }) => {
  const [lightboxOpen, toggleLightbox] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState({});
  const [lightboxImageSize, setImageSize] = useState({});

  let lightboxDisplay = css`
    display: ${lightboxOpen ? 'flex' : 'none'};
  `;
  
  //accepts object to inject the lightbox with the appropriate fluid imag source
  const triggerLightbox = (fluid) => {
    const w = Math.max(window.innerWidth || 0);
    const h = Math.max(window.innerHeight || 0);
    const windowAspectRatio = w/h;
    if (windowAspectRatio > fluid.aspectRatio) {
      //fit image height. Set height to win height and calculate width from aspect ratio
      setImageSize({
        height: `${h}px`,
        width: `${Math.floor(h*fluid.aspectRatio)}px`,
      });
    } else {
      // fit image w to screen w, calculate image height using screen w and photo aspect ratio
      setImageSize({
        height: `${Math.floor(w/fluid.aspectRatio)}px`,
        width: `${w}px`,
      })
    }
    setLightboxSrc(fluid);
    toggleLightbox(!lightboxOpen);
  }

  return (
    <>
      <div css={[lightbox, lightboxDisplay]} onClick={() => { toggleLightbox(!lightboxOpen) }} >
            <Img
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0, right: 0,
              margin: 'auto',
              ...lightboxImageSize
            }}
            fluid={lightboxSrc} />
      </div>

      <div css={galleryContainerStyles} >
        {imageData.map(image => {
          const galleryImgHeight = height || 200;
          const width = image.imageFile.asset.fluid.aspectRatio * galleryImgHeight;
          return (
            <div onClick={() => { triggerLightbox(image.imageFile.asset.fluid) }} >
              <Img
                className='img-wrapper'
                style={{width: `${width}px`, height: `${galleryImgHeight}px`}}
                imgStyle={{height: `${galleryImgHeight}px`, width: `${width}px`}}
                fluid={image.imageFile.asset.fluid}
              />
            </div>
          )
        })}
      </div>
    </>
  );
};

const galleryContainerStyles = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .img-wrapper {
    box-sizing: border-box;
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
`;

Gallery.propTypes = {
  imageData: PropTypes.array.isRequired,
  height: PropTypes.number,
}

export default Gallery;