import React, { useEffect, useState, useCallback } from 'react';
import { css } from '@emotion/core';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import { playButton } from '../../styles/audioPlayer';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.playOrPause = this.playOrPause.bind(this);
    this.state = {
      progress: 0,
    }
  }

  componentDidMount() {
    this.audioRef.current.load();
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  playOrPause() {
    if (!this.audioRef.current.paused) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.load();
      this.audioRef.current.play();
      this.audioRef.current.ontimeupdate = () => {
        console.log(this.state.progress)
        this.setState({
          progress: this.audioRef.current.currentTime,
        })
      }
    };
  }

  render() {
    return (
      <div>
        <button css={playButton} onClick={() => { this.playOrPause() }}>{`|>`}</button>
        <audio css={css`background-color: white; width: 100%;`} ref={this.audioRef}>
          <source src={`${this.props.audioSrc.asset.url}`} type={this.props.audioSrc.asset.mimeType}></source>
        </audio>
      </div>
    );
  }
}


export default Audio;