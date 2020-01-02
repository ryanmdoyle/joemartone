import { css } from '@emotion/core'

const playerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const trackCurrentContainer = css`
  width: 100%;
  height: 100px;
  display: flex;
  .buttonContainer {
    @media (max-width: 450px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
  @media (max-width: 700px) {
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 450px) {
    h3 {
      font-size: 1.1rem;
    }
    width: calc(100% - 60px);
    padding-left: 1rem;
  }
`;

const playButton = css`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid;
  text-align: center;
  text-decoration: none;
  padding-top: calc((100px / 2) - 1.6rem);

  .svg-container {
    font-size: 3rem;
  }
  
  @media (max-width: 450px) {
    width: 60px;
    height: 60px;
    padding: 1rem;
    display: flex;
    .svg-container {
      font-size: 1.5rem;
    }
  }
`;

const trackList = css`
  padding: 2rem 0;
  ul {
    list-style: none;
    margin: 0;
  }
  li {
    margin: 0;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.025);
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

export {
  playerStyles,
  trackCurrentContainer,
  currentTrackDetails,
  playButton,
  trackList
}