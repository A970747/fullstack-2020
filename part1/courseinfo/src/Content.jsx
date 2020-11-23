import React from 'react';

const Content = ({parts}) => {
  return (
    <>
      <p>
        {parts.part1} {parts.exercises1}
      </p>
      <p>
        {parts.part2} {parts.exercises2}
      </p>
      <p>
        {parts.part3} {parts.exercises3}
      </p>
    </>
  )
}

export default Content;