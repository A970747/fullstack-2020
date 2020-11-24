import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
  return (
    <>
      <Part name={parts.part1} exercise={parts.exercises1} />
      <Part name={parts.part2} exercise={parts.exercises2} />
      <Part name={parts.part3} exercise={parts.exercises3} />
    </>
  )
}

export default Content;