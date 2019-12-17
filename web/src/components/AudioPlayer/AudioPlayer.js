import React, { useState, useEffect } from 'react';

import { playerStyles } from '../../styles/audioPlayer';
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
        audioSrc={currentTrack.audioFile}
        trackTitle={currentTrack.audioTitle}
        trackSubtitle={currentTrack.audioDescription}
      />
      {/* List of Tracks */}
      <AudioList audioData={audioData} setTrack={setTrack} />
    </div >
  )
};

export default AudioPlayer;