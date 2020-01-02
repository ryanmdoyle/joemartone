import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

import BlockText from '../components/BlockText';

const Contracting = () => {

  const contractPageData = useStaticQuery(graphql`
    query contractQuery {
      allSanityContracting {
        edges {
          node {
            _rawContractingDescription
            _rawAvailableInstruments
            _rawAvailableEnsembles
          }
        }
      }
    }
`);

  console.log(contractPageData.allSanityContracting.edges[0].node);
  const { _rawContractingDescription, _rawAvailableInstruments, _rawAvailableEnsembles } = contractPageData.allSanityContracting.edges[0].node;

  return (
    <Layout>
      <PageTitle title='Contracting' />
      <div css={css`a {color: black;text-decoration: underline;}`} >
        <BlockText blocks={_rawContractingDescription.text} />
      </div>

      <h3>Available Instruments</h3>
      <BlockText blocks={_rawAvailableInstruments.text} />

      <h3>Available Ensembles</h3>
      <BlockText blocks={_rawAvailableEnsembles.text} />
    </Layout>
  );
};

export default Contracting;