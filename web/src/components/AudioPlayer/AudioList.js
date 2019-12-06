import React from 'react';
import { css } from '@emotion/core';

import {
  trackList
} from '../../styles/audioPlayer';

const AudioList = ({ audioData, setTrack }) => {

  return (
    <div css={trackList}>
      <ul>
        {audioData.map(track => (
          <li key={track.id} onClick={() => { setTrack(track); console.log(track.audioFile.asset.url); }}>
            <div css={css`display: flex; justify-content: space-between;`}>
              <h4 css={css`margin: 0;`}>{track.audioTitle}</h4>
              <p>1:54</p>
            </div>
            <p css={css`font-size: 1rem;`}>{track.audioDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;