import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <PageTitle title='Contact' />
      <ContactForm />
    </Layout>
  );
};

export default Contact;