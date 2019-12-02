import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <PageTitle title='Contact' />
      <ContactForm />
    </Layout>
  );
};

export default Contact;