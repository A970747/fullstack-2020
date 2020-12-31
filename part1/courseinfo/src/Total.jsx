import React, { useState } from 'react';

const Total = ({course: { parts }}) => {
  const [exerciseCount, setExerciseCount] = useState(parts.map(e => e.exercises))

  return (
    <>
      <p>
        Number of exercises {' '}
        {
        exerciseCount.reduce((a,b) =>  a + b )
        } 
      </p>
    </>
  )
}

export default Total;