import React from 'react';
import { css } from '@emotion/core';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';
import {
  trackCurrentContainer,
  currentTrackDetails,
  playButton,
} from '../../styles/audioPlayer';

const AudioControls = withCustomAudio(props => {
  return (
    <div css={trackCurrentContainer}>
      <div className='buttonContainer'>
        <PlayButton css={playButton} className='button' {...props} />
      </div>
      <div css={currentTrackDetails}>
        <h3 css={css`margin: 0;`}>{props.trackTitle}</h3>
        <p css={css`margin: 0;`}>{props.trackSubtitle}</p>
        <Progress
          className='progress'
          innerClassName='innerProgress'
          value={(props.currentTime / props.duration) * 100}
        />
        <Timer {...props} />
      </div>
    </div>
  );
});

export default AudioControls;