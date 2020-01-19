import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlockText from '../components/BlockText';

const Instruments = () => {
  const instruments = useStaticQuery(graphql`
    query instrumentsBlockText {
      allSanityInstruments {
        edges {
          node {
            categoryOrder {
              instrumentCategory
              _rawInstrumentList
            }
          }
        }
      }
    }
  `);
  
  const instrumentCategories = instruments.allSanityInstruments.edges[1].node.categoryOrder;

  return (
    <Layout>
      <SEO title="Instruments" />
      <PageTitle title={'Instruments'} />
        {instrumentCategories.map(category => {
          const categoryText = category._rawInstrumentList.text;
          const categoryTitle = category.instrumentCategory;
          return (
            <>
              <h4>{categoryTitle}</h4>
              <BlockText blocks={categoryText} />
            </>
          )
        })}
    <h4>Please <Link to='/contact' css={css`color: black;text-decoration:underline;`}>contact</Link> about rental inquiries.</h4>
    </Layout>
  );
};

export default Instruments;

