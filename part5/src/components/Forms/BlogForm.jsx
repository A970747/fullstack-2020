import React, {useState} from 'react';
import PropTypes from 'prop-types';
import blogService from '../../services/blogService';

/**
 * Renders a Form component
 * @name BlogForm
 * @component
 * @property {string} author - Author of the blog post
 * @property {string} title - Title of the blog post
 * @property {number} likes - How many likes a post has
 * @property {string} url - URL of the blog post
 *
 * @param {function} setErrorMessage - set displayed message for 5 seconds
 */

function BlogForm({setErrorMessage, setBlogs, blogFormRef}) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [likes, setLikes] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    blogService.createNewBlogPost({title, author, url, likes})
      .then((res) => {
        setErrorMessage(`New blog ${res.title} by ${res.author} added`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setTitle('');
        setAuthor('');
        setLikes('');
        setUrl('');
        blogFormRef.current.toggleVisibility();
        blogService.getAllBlogPosts()
          .then((res) => setBlogs(res));
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  return (
    <div className='formDiv'>
      <h2>Post new blog info</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type='text' value={title}
            onChange={({target})=> setTitle(target.value)}
          />
        </label>
        <label>Author:
          <input type='text' value={author}
            onChange={({target})=> setAuthor(target.value)}
          />
        </label>
        <label>URL:
          <input type='text' value={url}
            onChange={({target})=> setUrl(target.value)}
          />
        </label>
        <label>Likes:
          <input type='text' value={likes}
            onChange={({target})=> setLikes(target.value)}
          />
        </label>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  setErrorMessage: PropTypes.func,
  setBlogs: PropTypes.func,
  blogFormRef: PropTypes.object,
};

export default BlogForm;
