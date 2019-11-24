import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const contracting = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Contracting' />
    </Layout>
  );
};

export default contracting;