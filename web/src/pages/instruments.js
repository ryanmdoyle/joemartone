import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const instruments = () => {
  return (
    <Layout>
      <PageTitle title={'Instruments'} />
      <h3>Concert Drums</h3>
      <h4>Bass Drums</h4>
      <ul>
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
    </Layout>
  );
};

export default instruments;

