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
      length: 100,
    }
  }

  componentDidMount() {
    this.audioRef.current.load();
    this.setState({
      length: this.audioRef.current.duration,
    })
    console.log('component mounted and length is:', this.state.length)
  }

  componentDidUpdate() {
    console.log('props', this.props)
    console.log('audioRef', this.audioRef)
    console.log('component updated and length is:', this.state.length)
  }

  componentWillUnmount() {
    this.audioRef.current.pause();
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
        <progress min={1} max={100}></progress>
      </div>
    );
  }
}


export default Audio;