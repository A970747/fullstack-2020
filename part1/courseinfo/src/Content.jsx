import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
  return (
    <>
    {
      parts.map(({name, exercises}) => <Part name={name} exercise={exercises} />)
    }
{/*       <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part3.name} exercise={part3.exercises} /> */}
    </>
  )
}

export default Content;