import React, {useState} from 'react';
import blogService from '../services/blogService';
import PropTypes from 'prop-types';

/**
 * Renders individual blog information.
 * @name Blog
 * @component
 * @property {string} author - Author of the blog post
 * @property {string} title - Title of the blog post
 * @property {number} likes - How many likes a post has
 * @property {string} url - URL of the blog post
 *
 * @param {function} setErrorMessage - set displayed message for 5 seconds
 */

function Blog({blog: {title, author, url, likes, user, id}, setBlogs} = {}) {
  const [view, setView] = useState(false);
  const toggleView = {display: view ? '' : 'none'};

  function handleViewClick() {
    setView(!view);
  }

  function handleLikeClick() {
    blogService.updateBlogPost(id, {likes: likes + 1})
      .then(() => {
        blogService.getAllBlogPosts()
          .then((res) => setBlogs(res));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  function handleDeleteClick() {
    blogService.deleteBlogPost(id)
      .then(() => {
        blogService.getAllBlogPosts()
          .then((res) => setBlogs(res));
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handleViewClick}>view</button>
      <div style={toggleView}>
        <p>{author}</p>
        <a href={url} rel="noopener noreferrer">{url}</a>
        <p>{likes}
          <button onClick={handleLikeClick}>like</button>
        </p>
      </div>
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
    id: PropTypes.string,
    user: PropTypes.object,
  }),
  setBlogs: PropTypes.func,
};

export default Blog;
