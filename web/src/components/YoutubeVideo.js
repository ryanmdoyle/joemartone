import React from 'react';
import { css } from '@emotion/core';

const videoWithCaption = css`
  margin-bottom: 2rem;
`;

const videoContainer = css`
  position: relative;
  padding-bottom: 56.25%;
  /* padding-top: 25, */
  height: 0;
`;

const iframeStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const captionStyle = css`
  margin-top: 0.5rem;
  /* font-family: 'Raleway'; */
  color: #757575;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

const YoutubeVideo = ({ videoId, caption }) => {
  return (
    <div css={videoWithCaption}>
      <div css={videoContainer}>
        <iframe css={iframeStyles} src={`https://www.youtube.com/embed/${videoId}`} frameBorder='0' title={`Youtube video:${videoId}`}>
        </iframe>
      </div>
      <p css={captionStyle}>{caption}</p>
    </div>
  );
};

export default YoutubeVideo;