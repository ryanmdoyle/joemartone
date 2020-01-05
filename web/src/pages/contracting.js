import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Contract from '../components/Contract';
import BlockText from '../components/BlockText';

const Contracting = () => {

  const contractPageData = useStaticQuery(graphql`
    query MyQuery {
      allSanityContracting {
        edges {
          node {
            _rawContractingDescription
            _rawAvailableInstruments
            _rawAvailableEnsembles
            contracts {
              contractDescription
              contractTitle
              contractPhotos {
                imageFile {
                  asset {
                    fluid(maxWidth: 900) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
              }
              contractVideos {
                videoCaption
                videoId
                _id
              }
            }
          }
        }
      }
    }
`);

  
  const { _rawContractingDescription, _rawAvailableInstruments, _rawAvailableEnsembles, contracts } = contractPageData.allSanityContracting.edges[0].node;

  return (
    <Layout>
      <SEO title='Contracting' />
      <PageTitle title='Contracting' />
      <div css={css`a {color: black;text-decoration: underline;}`} >
        <BlockText blocks={_rawContractingDescription.text} />
      </div>

      {contracts.map(contract => (
        <Contract
          title={contract.contractTitle}
          description={contract.contractDescription}
          photos={contract.contractPhotos}
          videos={contract.contractVideos}
        />
      ))}

      <h3>Available Instruments</h3>
      <BlockText blocks={_rawAvailableInstruments.text} />

      <h3>Available Ensembles</h3>
      <BlockText blocks={_rawAvailableEnsembles.text} />
    </Layout>
  );
};

export default Contracting;