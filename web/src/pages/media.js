import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import YoutubeVideo from '../components/YoutubeVideo';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

// audio source
// import streamUrl from '../audio/oddity.mp3';

const videoGallery = css`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  .video {
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
  }
  
  @media (min-width: 800px) {
    .video {
      width: calc(100% / 2 - 20px);
      margin-left: 20px;
    }
    .video:first-of-type, .video:nth-of-type(4) {
      width: 100%;
    }
  }
`;

const Media = () => {
  const mediaQuery = useStaticQuery(graphql`
    query mediaQuery {
      allSanityMedia {
        edges {
          node {
            mediaCategory
            mediaList {
              ... on SanityVideos {
                id
                video
                videoId
                videoCaption
              }
              ... on SanityAudio {
                id
                audioFile {
                  asset {
                    url
                    mimeType
                    size
                  }
                }
                audioTitle
                audioDescription
                audioComposer
              }
            }
          }
        }
      }
    }
  `);
  const videos = mediaQuery.allSanityMedia.edges[1].node.mediaList;
  const audio = mediaQuery.allSanityMedia.edges[2].node.mediaList;

  return (
    <Layout>
      <PageTitle title='Media' />
      <h3>Video</h3>
      <div css={videoGallery}>
        {videos.map(video => (
          <div className='video' key={video.id}>
            {/* FIX LINK BELOW (currently uses link, needs to use id) */}
            <YoutubeVideo videoId={video.videoId} caption={video.videoCaption} />
          </div>
        ))}
      </div>
      <h3>Audio</h3>
      <AudioPlayer audioData={audio} />
    </Layout>
  );
};

export default Media;