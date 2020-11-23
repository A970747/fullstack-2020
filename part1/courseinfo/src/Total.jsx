import React from 'react';

const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts.exercises1 + parts.exercises2 + parts.exercises3}</p>
    </>
  )
}

export default Total;