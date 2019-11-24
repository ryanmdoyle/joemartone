import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const resume = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Resume' />
    </Layout>
  );
};

export default resume;