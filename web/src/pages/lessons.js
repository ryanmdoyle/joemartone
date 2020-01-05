import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlockText from '../components/BlockText';

const Lessons = () => {
  const lessonData = useStaticQuery(graphql`
    query lessons {
      allSanityLessons {
        edges {
          node {
            _rawLessonsContent
            LessonFiles {
              author
              description
              asset {
                id
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  const lessonText = lessonData.allSanityLessons.edges[0].node._rawLessonsContent.text;
  const files = lessonData.allSanityLessons.edges[0].node.LessonFiles;
  return (
    <Layout>
      <SEO title='Lessons' />
      <PageTitle title='Lessons' />
      <BlockText blocks={lessonText} />
      {files.length > 0 ? <h3>Downloads</h3> : null}
      {files.length > 0 ?
        <ul>
          {files.map(file => (
          <li><a href={file.asset.url} css={css`color:black;`} target='_blank' rel="noopener noreferrer">{file.description}</a></li>
          ))} 
        </ul>
        : null
      }
    </Layout>
  );
};

export default Lessons;