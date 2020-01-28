import React from 'react';

interface ArticleTagsProps {
  tags: string[];
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return <span>{tags}</span>;
};

export default ArticleTags;
