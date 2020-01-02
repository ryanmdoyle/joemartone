import React from 'react';
import { css } from '@emotion/core';
import {
  trackCurrentContainer,
  currentTrackDetails,
  playButton,
} from '../../styles/audioPlayer';
import { IoMdPlay, IoMdPause } from "react-icons/io";

const progressStyles = css`
 width: 100%;
 height: 20px;
 background-color: white;
 outline: 1px solid black;
`

class AudioControls extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.playOrPause = this.playOrPause.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.state = {
      progressValue: 0,
      duration: 0,
    }
  }

  componentDidMount() {
    this.audioRef.current.addEventListener('timeupdate', () => {
      if (this.audioRef.current !== null) {
        this.setState({
          progressValue: this.audioRef.current.currentTime,
        })
      }
    })
  }

  componentWillUnmount() {
    if (!this.audioRef.current.paused) {
      this.audioRef.current.pause();
    }
    this.audioRef.current.removeEventListener('timeupdate', () => {
      this.setState({
        progressValue: this.audioRef.current.currentTime,
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.duration !== this.audioRef.current.duration && !isNaN(this.audioRef.current.duration)) {
      this.setState({ duration: this.audioRef.current.duration })
    }

    if (prevProps.audioSrc.asset.url !== this.props.audioSrc.asset.url) {
      if (!this.audioRef.current.paused) {
        this.audioRef.current.pause();
        this.audioRef.current.load();
        this.audioRef.current.play();
      } else {
        this.audioRef.current.load();
      };
    }
  }

  updateProgress() {
    if (this.state.duration !== this.audioRef.current.duration) {
      this.setState({ duration: this.audioRef.current.duration })
    }
  }

  playOrPause() {
    if (!this.audioRef.current.paused) {
      this.audioRef.current.pause();
    } else {
      this.audioRef.current.load();
      this.audioRef.current.play();
    };
  }

  render() {
    const audioRefStatus = (this.audioRef.current === null) ? false : this.audioRef.current.paused;
    return (
      <div css={trackCurrentContainer}>
        <div className='buttonContainer'>
          <div css={playButton} onClick={() => { this.playOrPause() }}>
            <div className='svg-container'>
              {audioRefStatus ? <IoMdPlay /> : <IoMdPause />}
            </div>
          </div>
          <audio css={css`background-color: white; width: 100%;`} ref={this.audioRef}>
            <source src={`${this.props.audioSrc.asset.url}`} type={this.props.audioSrc.asset.mimeType}></source>
          </audio>
        </div>
        <div css={currentTrackDetails}>
          <h3 css={css`margin: 0;`}>{this.props.trackTitle}</h3>
          <p css={css`margin: 0;`}>{this.props.trackSubtitle}</p>
          <progress css={progressStyles} value={this.state.progressValue} max={this.state.duration}></progress>
        </div>
      </div>
    );
  }
}

export default AudioControls;