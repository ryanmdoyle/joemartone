import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlockText from '../components/BlockText';

const Instruments = () => {
  const instruments = useStaticQuery(graphql`
    query instrumentsBlockText {
      allSanityInstrumentCategories {
        edges {
          node {
            _rawInstrumentList
            instrumentCategory
          }
        }
      }
    }
  `);
  
  const instrumentCategories = instruments.allSanityInstrumentCategories.edges;

  return (
    <Layout>
      <SEO title="Instruments" />
      <PageTitle title={'Instruments'} />
        {instrumentCategories.map(category => {
          const categoryText = category.node._rawInstrumentList.text;
          const categoryTitle = category.node.instrumentCategory;
          return (
            <>
              <h4>{categoryTitle}</h4>
              <BlockText blocks={categoryText} />
            </>
          )
        })}
    </Layout>
  );
};

export default Instruments;

