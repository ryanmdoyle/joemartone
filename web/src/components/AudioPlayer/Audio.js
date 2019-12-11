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
      progressValue: 0,
      duration: 100,
    }
  }

  componentDidMount() {
    this.audioRef.current.load();
    console.log('component mounted');
    const audioData = this.audioRef.current;
    console.log(audioData)
    this.audioRef.current.onloadedmetadata = () => {
      if (this.state.duration !== this.audioRef.current.duration) {
        this.setState({ duration: this.audioRef.current.duration })
      }
    }
  }

  componentDidUpdate() {
    console.log('updating')
  }

  componentWillUnmount() {
    this.audioRef.current.pause();
    console.log('component unmount')
  }

  playOrPause() {
    if (!this.audioRef.current.paused) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.load();
      this.audioRef.current.play();
      this.audioRef.current.ontimeupdate = () => {
        this.setState({
          progressValue: this.audioRef.current.currentTime,
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
        <progress value={this.state.progressValue} max={this.state.duration}></progress>
      </div>
    );
  }
}


export default Audio;