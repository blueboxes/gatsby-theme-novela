import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";

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
    }

    return (
        <Section narrow>
            <Disqus config={disqusConfig} />
        </Section>
    )
  }

  export default DisqusArea;