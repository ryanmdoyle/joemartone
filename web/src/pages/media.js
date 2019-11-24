import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const media = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Media' />
    </Layout>
  );
};

export default media;