import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

import pageListStyles from '../styles/pageListStyles';

const instruments = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title={'Instruments'} />
      <h3>Concert Drums</h3>
      <div css={pageListStyles}>
        <h4>Bass Drums</h4>
        <ul >
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
          <li>Thing 4</li>
        </ul>
        <h4>Concert Toms</h4>
        <ul>
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
          <li>Thing 4</li>
        </ul>
        <h4>Field Drums</h4>
        <ul>
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
          <li>Thing 4</li>
        </ul>
        <h4>Snare Drums</h4>
        <ul>
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
          <li>Thing 4</li>
        </ul>
      </div>
    </Layout>
  );
};

export default instruments;

