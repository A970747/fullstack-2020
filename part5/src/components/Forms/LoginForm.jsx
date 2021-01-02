import React, {useState} from 'react';
import PropTypes from 'prop-types';
import blogService from '../../services/blogService';
import userService from '../../services/userService';

/**
 * Renders a Form component
 * @name LoginForm
 * @component
 * @property {string} userName - stores value from user text user name input
 * @property {string} password - stores value from user password input
 *
 * @param {function} setUser - set user info in state in App.js
 * @param {function} setErrorMessage - set displayed message for 5 seconds
 */

function LoginForm({setUser, setErrorMessage}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    userService.userLogin({username: userName, password})
      .then((user) => {
        window.localStorage.setItem(
          'loggedBlogAppUser', JSON.stringify(user),
        );

        blogService.setToken(user.token);
        setUserName('');
        setPassword('');
        setUser(user);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  }

  return (
    <form onSubmit={handleLogin}>
      <label>Username:
        <input id='username' type='text' value={userName}
          onChange={({target})=> setUserName(target.value)}
        />
      </label>
      <label>Password:
        <input id='password' type='password' value={password}
          onChange={({target})=> setPassword(target.value)}
        />
      </label>
      <button id='login-button' type='submit'>login</button>
    </form>
  );
};

LoginForm.propTypes = {
  setErrorMessage: PropTypes.func,
  setUser: PropTypes.func,
};

export default LoginForm;
