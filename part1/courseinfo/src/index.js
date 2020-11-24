import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
/*   const [parts, setParts] = useState({
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }) */

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total parts={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))