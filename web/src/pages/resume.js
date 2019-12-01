import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';


const resume = () => {
  return (
    <Layout>
      <PageTitle title='Resume' />
    </Layout>
  );
};

export default resume;