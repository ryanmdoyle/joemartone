import React from 'react';
import Gallery from './Gallery';
import YoutubeVideo from './YoutubeVideo';


const Contract = ({title, description, videos, photos}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      
      {videos.length > 0 ?
        videos.map(video => (
          <YoutubeVideo videoId={video.videoId} caption={video.videoCaption} />
        )) : null
      }

      {photos.length > 0 ? <Gallery imageData={photos} /> : null}
      
    </div>
  );
};

export default Contract;