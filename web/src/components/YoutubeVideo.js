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

const iframeStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  // zIndex: -1,
};

const captionStyle = css`
  margin-top: 0.5rem;
  /* font-family: 'Raleway'; */
  color: #757575;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

const YoutubeVideo = ({ videoId, caption }) => {
  // let iframeRef = React.createRef();

  // const triggeriFrame = () => {
  //   console.log(iframeRef);
  //   iframeRef.current.contentWindow.click();
  // }

  return (
    <div css={videoWithCaption}>
      <div css={videoContainer}>
        <iframe
          style={iframeStyles}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <p css={captionStyle}>{caption}</p>
    </div>
  );
};

export default YoutubeVideo;