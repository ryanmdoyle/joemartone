import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import YoutubeVideo from '../components/YoutubeVideo';
import AudioPlayer from '../components/AudioPlayer';

// audio source
import streamUrl from '../audio/oddity.mp3';

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
    .video:first-child, .video:nth-child(4) {
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
                  }
                }
                audioTitle
                audioDescription
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
      <AudioPlayer
        audioFiles={audio}
        streamUrl={streamUrl}
        trackTitle='The track title and a longer title'
        preloadType='auto' />
    </Layout>
  );
};

export default Media;