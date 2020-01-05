import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlockText from '../components/BlockText';
import Gallery from '../components/Gallery';

const Bio = () => {
  const bioContent = useStaticQuery(graphql`
    query sanityBiography {
      sanityBiography {
        _rawBiographyContent
        _rawBiographyImages
        biographyImages {
          imageFile {
            asset {
              fluid(maxWidth: 400) {
                src
                srcSet
                srcSetWebp
                srcWebp
                sizes
                base64
                aspectRatio
              }
            }
          }
        }
      }
    }
  `)
  const photos = bioContent.sanityBiography.biographyImages;

  return (
    <Layout>
      <SEO title='Biography' />
      <PageTitle title='Biography' />
      <BlockText blocks={bioContent.sanityBiography._rawBiographyContent.text} />
      {photos.length > 0 ? <Gallery imageData={photos} height={120} /> : null}
    </Layout>
  );
};

export default Bio;