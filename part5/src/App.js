import React, {useEffect} from 'react';
import LoginForm from './components/LoginForm';
import blogService from './services/blogService';

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
  const [newBlog, setNewBlog] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    blogService.getAllBlogPosts()
      .then((res) => setBlogs(res));
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <LoginForm //setUser={setUser}
      />
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
