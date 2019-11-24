import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const bio = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Biography' />
    </Layout>
  );
};

export default bio;