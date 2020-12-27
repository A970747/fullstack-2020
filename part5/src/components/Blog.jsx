/* eslint-disable react/prop-types */
import React from 'react';

function Blog({blog}) {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.author}</p>
      <p><a>{blog.url}</a></p>
      <p>{blog.likes}</p>
    </div>
  );
}

export default Blog;
