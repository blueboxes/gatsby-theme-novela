import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Section from '@components/Section';

import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

interface ArticleDisqusProps {
  article: IArticle;
}

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            siteUrl
          }
        }
      }
    }
  }
`;

const DisqusArea: React.FC<ArticleDisqusProps> = ({ article }) => {
  const results = useStaticQuery(siteQuery);
  const siteUrl = results.allSite.edges[0].node.siteMetadata.siteUrl;

  let disqusConfig = {
    url: siteUrl,
    identifier: article.id,
    title: article.title,
  };

  return (
    <Section narrow>
      <DisqusContainer>
        <Disqus config={disqusConfig} />
      </DisqusContainer>
    </Section>
  );
};

export default DisqusArea;

const DisqusContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  z-index: 1;

  ${mediaqueries.tablet`
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: -20px auto 80px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;
