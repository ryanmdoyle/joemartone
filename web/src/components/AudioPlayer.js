import React from 'react';
import { css } from '@emotion/core';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

const playerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const trackCurrentContainer = css`
  width: 100%;
  height: 100px;
  display: flex;
`;

const currentTrackDetails = css`
  width: calc(100% - 100px);
  padding-left: 1.5rem;
  .progress {
    outline: 1px solid black;
    width: 100%;
    height: 10px;
    margin: 0.25rem 0;
  }
  .innerProgress {
    background-color: black;
    height: 10px;
  }
`;

const playButton = css`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 2rem;
`;

const trackList = css`
  height: 300px;
  padding: 2rem 0;
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin: 0;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    transition: background-color 0.3s;
  }
  li:first-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.9);
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }
`;

const AudioPlayer = withCustomAudio(props => {
  return (
    <div css={playerStyles}>
      {/* Player Button and Details of Current Track */}
      <div css={trackCurrentContainer}>
        <div css={css`width: 100px;`}>
          <PlayButton css={playButton} className='button' {...props} />
        </div>
        <div css={currentTrackDetails}>
          <h3 css={css`margin: 0;`}>{props.trackTitle}</h3>
          <p css={css`margin: 0;`}>subtitle</p>
          <Progress
            className='progress'
            innerClassName='innerProgress'
            value={(props.currentTime / props.duration) * 100}
          />
          <Timer {...props} />
        </div>
      </div>

      {/* List of Tracks */}
      <div css={trackList}>
        <ul>
          <li>
            <div css={css`display: flex; justify-content: space-between;`}>
              <h4 css={css`margin: 0;`}>Here is a track title</h4>
              <p>1:54</p>
            </div>
            <p css={css`font-size: 1rem;`}>The artist name</p>
          </li>
          <li>
            <div css={css`display: flex; justify-content: space-between;`}>
              <h4 css={css`margin: 0;`}>Here is a track title</h4>
              <p>1:54</p>
            </div>
            <p css={css`font-size: 1rem;`}>The artist name</p>
          </li>
          <li>
            <div css={css`display: flex; justify-content: space-between;`}>
              <h4 css={css`margin: 0;`}>Here is a track title</h4>
              <p>1:54</p>
            </div>
            <p css={css`font-size: 1rem;`}>The artist name</p>
          </li>
        </ul>
      </div>
    </div >
  )
})

export default AudioPlayer;