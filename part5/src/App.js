import React, {useState, useEffect} from 'react';
import LoginForm from './components/Forms/LoginForm';
import BlogForm from './components/Forms/BlogForm';
import Notification from './components/Notification';
import blogService from './services/blogService';
import LogOutButton from './components/LogOutButton';
import Blog from './components/Blog';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * @return (
 *   <User age={age} name={name} />
 * )
 */
function App() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    blogService.getAllBlogPosts()
      .then((res) => setBlogs(res));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <Notification message={errorMessage} />
      {
        (user === null)
          ? <LoginForm setUser={setUser} setErrorMessage={setErrorMessage}/>
          : <div>
              <p>{user.name} logged in</p>
              <LogOutButton setUser={setUser} />
              <BlogForm setErrorMessage={setErrorMessage}/>
            </div>
      }
      <div>
        {
          blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
        }
      </div>
    </div>
  );
}

export default App;

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @return {int} The sum of the two numbers.
 */
