import React from 'react';

const Header = ({course: { name }}) => {
  return (
    <h1>{name}</h1>
  )
}

export default Header;