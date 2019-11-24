import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const contact = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Contact' />
    </Layout>
  );
};

export default contact;