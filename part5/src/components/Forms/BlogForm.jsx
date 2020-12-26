import React, {useState} from 'react';
import blogService from '../../services/blogService';

function blogForm({}) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [likes, setLikes] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    blogService.createNewBlogPost({title, author, url, likes})
      .then((res) => {
        setTitle('');
        setAuthor('');
        setUrl('');
        setLikes('');
      })
      .catch((error) => {
        setErrorMessage('Error creating blog');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  return (
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
      <button type='submit'>submit</button>
    </form>
  );
};

export default blogForm;
