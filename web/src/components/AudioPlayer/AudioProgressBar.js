import React from 'react';
import { css } from '@emotion/core';

const canvasStyles = css`
  width: 100%;
  height: 20px;
  background-color: white;
  outline: 1px solid black;
  .progress {
    background-color: black;
    height: 100%;
  }
`;

const AudioProgressBar = () => {
  const progress = `${70}%`;
  console.log(progress)
  return (
    <div css={canvasStyles}>
      <div css={{ width: '70', backgroundColor: 'black', }}></div>
    </div >
  );
};

export default AudioProgressBar;