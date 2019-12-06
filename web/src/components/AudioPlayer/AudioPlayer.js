import React, { useState, useEffect } from 'react';

import { playerStyles } from '../../styles/audioPlayer';
import streamUrl from '../../audio/oddity.mp3';
import AudioControls from './AudioControls';
import AudioList from './AudioList';

const AudioPlayer = ({ audioData }) => {
  const [currentTrack, setTrack] = useState({
    audioFile: { asset: { url: '' } },
    audioTitle: 'Loading...',
    audioDescription: 'Beep boop beep',
  });

  useEffect(() => {
    setTrack(audioData[0])

  }, [audioData])

  return (
    <div css={playerStyles}>
      <AudioControls
        streamUrl='https://cdn.sanity.io/files/k0o6yoq9/production/07f39c1e7231a8f24391fcca71c5eb571951d9a9.mp3'
        trackTitle={currentTrack.audioTitle}
        trackSubtitle={currentTrack.audioDescription}
        preloadType='auto'
      />
      <audio>
        <button
          onClick={() => {
            currentTrack.audioFile.asset.url.play();
          }}
        ></button>

      </audio>
      {/* List of Tracks */}
      <AudioList audioData={audioData} setTrack={setTrack} />
    </div >
  )
};

export default AudioPlayer;