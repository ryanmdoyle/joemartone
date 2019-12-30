import React, { useState } from 'react';
import { css } from '@emotion/core';

const galleryContainerStyles = css`
  width: 100;
  display: flex;
  flex-wrap: wrap;
`;

const galleryItem = css`
  box-sizing: border-box;
  width: 280px;
  height: 300px;
  margin: 10px;
  background-color: green;

  @media (max-width: 900) {
    width: 100%;
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

  return (
    <>
      {lightboxOpen ? <div css={lightbox} onclick={() => { toggleLightbox(false) }}></div> : <div></div>}

      <div css={galleryContainerStyles}>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
        <div css={galleryItem}></div>
      </div>
    </>
  );
};

export default Gallery;