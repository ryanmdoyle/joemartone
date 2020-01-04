import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlockText from '../components/BlockText';

const Bio = () => {
  const bioContent = useStaticQuery(graphql`
    query sanityBiography {
      sanityBiography {
        _rawBiographyContent
        _rawBiographyImages
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title='Biography' />
      <PageTitle title='Biography' />
      <BlockText blocks={bioContent.sanityBiography._rawBiographyContent.text} />
    </Layout>
  );
};

export default Bio;