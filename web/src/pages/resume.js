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
    query MyQuery {
      allSanityResumeCategories {
        edges {
          node {
            resumeCategoryItems {
              id
              _id
              resumeItem
              resumeItemDescription
              resumeItemLink
            }
            resumeCategory
          }
        }
      }
    }
  `)
  const categories = resumeData.allSanityResumeCategories.edges;

  return (
    <Layout>
      <PageTitle title='Resume' />
      {categories.map(category => (
        <>
          <h3>{category.node.resumeCategory}</h3>
          <ul css={listStyles}>{category.node.resumeCategoryItems.map(item => (
            <li>
              <a href={item.resumeItemLink}>
                {item.resumeItem}
              </a>
              {` - ${item.resumeItemDescription}`}
            </li>
          ))}</ul>
        </>
      ))}
    </Layout>
  );
};

export default Resume;