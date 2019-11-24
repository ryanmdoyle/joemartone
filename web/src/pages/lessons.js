import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const lessons = ({ location }) => {
  return (
    <Layout location={location}>
      <PageTitle title='Lessons' />
    </Layout>
  );
};

export default lessons;