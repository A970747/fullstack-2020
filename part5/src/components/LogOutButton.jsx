/* eslint-disable react/prop-types */
import React from 'react';

const LogOutButton = ({setUser}) =>
  <button onClick={() => {
    window.localStorage.removeItem('loggedBlogAppUser');
    setUser(null);
  }}>Log Out</button>;

export default LogOutButton;
