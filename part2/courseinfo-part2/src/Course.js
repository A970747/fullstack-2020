import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

function Course({course}) {

  return (
    <div>    
      <Header key={`Header${course.id}`} course={course} />
      <Content key={`Content${course.id}`} course={course} />
      <Total key={`Total${course.id}`} course={course} />
    </div>
  );
}

export default Course;