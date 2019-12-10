import React, { useState, useEffect } from 'react';

import { playerStyles } from '../../styles/audioPlayer';
import streamUrl from '../../audio/oddity.mp3';
import AudioControls from './AudioControls';
import AudioList from './AudioList';
import Audio from './Audio';

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
        // FIX
        streamUrl={currentTrack.audioFile.asset.url}
        trackTitle={currentTrack.audioTitle}
        trackSubtitle={currentTrack.audioDescription}
        preloadType='auto'
      />
      <Audio audioSrc={currentTrack.audioFile} />
      {/* List of Tracks */}
      <AudioList audioData={audioData} setTrack={setTrack} />
    </div >
  )
};

export default AudioPlayer;