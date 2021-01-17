import React from 'react';
import { Link } from 'react-router-dom';
import blogContent from './BlogContent';

const BlogList = () => (
  <>
    <h1>Blog posts</h1>
    {blogContent.map((blogPost, key) => (
      <Link
        className='blog-list-item'
        key={key}
        to={`/blogPage/${blogPost.name}`}>
        <h3>{blogPost.title}</h3>
        <p>{blogPost.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default BlogList;
