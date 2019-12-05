import React, {useState, useEffect} from 'react';
import { css } from '@emotion/core';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';
import {
  playerStyles,
  trackCurrentContainer,
  currentTrackDetails,
  playButton,
  trackList
} from '../styles/audioPlayer';

const AudioPlayer = withCustomAudio(props => {
  const audioFiles = props.audioFiles;
  const [ currentTrack, setTrack] = useState({});

  useEffect(() => {
    setTrack(audioFiles[0])
  }, [audioFiles])
  console.log(currentTrack);
  return (
    <div css={playerStyles}>
      {/* Player Button and Details of Current Track */}
      <div css={trackCurrentContainer}>
        <div className='buttonContainer'>
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
          {audioFiles.map(track => (
            <li key={track.id} onClick={() => {setTrack(track.id)}}>
              <div css={css`display: flex; justify-content: space-between;`}>
                <h4 css={css`margin: 0;`}>{track.audioTitle}</h4>
                <p>1:54</p>
              </div>
              <p css={css`font-size: 1rem;`}>{track.audioDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    </div >
  )
})

export default AudioPlayer;