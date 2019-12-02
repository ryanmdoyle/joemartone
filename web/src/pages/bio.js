import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
  console.log(bioContent)
  return (
    <Layout>
      <PageTitle title='Biography' />
      <BlockText blocks={bioContent.sanityBiography._rawBiographyContent.text} />
    </Layout>
  );
};

export default Bio;