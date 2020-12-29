import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a button used to log out.
 * @name LogOutButton
 * @component
 *
 * @param {function} setUser - used to remove User from state in App.js
 */

const LogOutButton = ({setUser}) =>
  <button onClick={() => {
    window.localStorage.removeItem('loggedBlogAppUser');
    setUser(null);
  }}>Log Out</button>;

LogOutButton.propTypes = {
  setUser: PropTypes.func,
};

export default LogOutButton;
