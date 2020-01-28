import React from 'react';

interface ArticleTagsProps {
  tags: string[];
}

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  // TODO(eugene): need implements tag!
  return <span>{tags}</span>;
};

export default ArticleTags;
