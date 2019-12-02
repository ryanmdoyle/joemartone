import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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

  return (
    <Layout>
      <PageTitle title='Lessons' />
      <BlockText blocks={lessonText} />
    </Layout>
  );
};

export default Lessons;