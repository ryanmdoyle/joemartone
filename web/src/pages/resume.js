import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

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
    query allResume {
      allSanityResume {
        edges {
          node {
            categoryOrder {
              id
              resumeCategory
              resumeCategoryItems {
                resumeItem
                resumeItemDescription
                resumeItemLink
                id
              }
            }
          }
        }
      }
    }
  `)
  const categories = resumeData.allSanityResume.edges[0].node.categoryOrder;
  console.log(categories);
  return (
    <Layout>
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