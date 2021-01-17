import React from 'react';
import blogContent from './BlogContent';

const BlogPage = ({ match }) => {
  const name = match.params.name;
  const blogPost = blogContent.find((blogPost) => blogPost.name === name);

  if (!blogPost) return <h1>This blog post does not exist!</h1>;

  return (
    <>
      <h1>BlogPage</h1>
      <h1>{blogPost.title}</h1>
      {blogPost.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default BlogPage;
