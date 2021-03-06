import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const listStyles = css`
  a, li {
    color: black;
  }
  a {
    font-weight: 700;
  }
`;

const Resume = () => {
  const resumeData = useStaticQuery(graphql`
    query sortedResume {
      allSanityResume {
        edges {
          node {
            id
            categoryOrder {
              resumeCategoryItems {
                resumeItem
                resumeItemDescription
                resumeItemLink
              }
              resumeCategory
            }
          }
        }
      }
    }
  `)
  const categories = resumeData.allSanityResume.edges[0].node.categoryOrder;

  return (
    <Layout>
      <SEO title='Resume' />
      <PageTitle title='Resume' />
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.resumeCategory}</h3>
          <ul css={listStyles}>{category.resumeCategoryItems.map(item => (
            <li key={item.id}>
              <a href={item.resumeItemLink}>
                {item.resumeItem}
              </a>
              {` - ${item.resumeItemDescription}`}
            </li>
          ))}</ul>
        </div>
      ))}
    </Layout>
  );
};

export default Resume;