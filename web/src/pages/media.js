import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import YoutubeVideo from '../components/YoutubeVideo';
import AudioPlayer from '../components/AudioPlayer';

// audio source
import streamUrl from '../audio/oddity.mp3';

const Media = () => {
  return (
    <Layout>
      <PageTitle title='Media' />
      <YoutubeVideo videoId='Qpy8dD7IrN0' />
      <AudioPlayer streamUrl={streamUrl} trackTitle='The track title and a longer title' preloadType='auto' />
    </Layout>
  );
};

export default Media;