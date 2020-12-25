import React, {useState} from 'react';
import userService from '../services/userService';

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
function loginForm({setUser}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    
    userService.userLogin({username: userName, password})
      .then((user) => {
        setUser(user);
        setUserName('');
        setPassword('');
      })
      .catch((error) => {
        setErrorMessage('Wrong credentials');
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
