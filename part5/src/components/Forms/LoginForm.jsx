import React, {useState} from 'react';
import blogService from '../../services/blogService';
import userService from '../../services/userService';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = something
 * const name = something
 * @return (
 *   <User age={age} name={name} />
 * )
 */
function loginForm({setUser, setErrorMessage}) {
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
        <input type='text' value={userName}
          onChange={({target})=> setUserName(target.value)}
        />
      </label>
      <label>Password:
        <input type='password' value={password}
          onChange={({target})=> setPassword(target.value)}
        />
      </label>
      <button type='submit'>login</button>
    </form>
  );
};

export default loginForm;
