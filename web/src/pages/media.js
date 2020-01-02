import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import YoutubeVideo from '../components/YoutubeVideo';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import Gallery from '../components/Gallery';

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
              ... on SanityPhotos {
                id
                imageFile {
                  asset {
                    fixed(width: 300, height: 300) {
                      src
                    }
                  }
                  caption
                  attribution
                }
              }
            }
          }
        }
      }
    }
  `);
  const photos = mediaQuery.allSanityMedia.edges[0].node.mediaList;
  const videos = mediaQuery.allSanityMedia.edges[1].node.mediaList;
  const audio = mediaQuery.allSanityMedia.edges[2].node.mediaList;

  return (
    <Layout>
      <PageTitle title='Media' />
      <h3>Video</h3>
      <div css={videoGallery}>
        {videos.map(video => (
          <div className='video' key={video.id}>
            <YoutubeVideo videoId={video.videoId} caption={video.videoCaption} />
          </div>
        ))}
      </div>
      <h3>Audio</h3>
      <AudioPlayer audioData={audio} />
      <h3>Photos</h3>
      <Gallery imageData={photos} />
    </Layout>
  );
};

export default Media;