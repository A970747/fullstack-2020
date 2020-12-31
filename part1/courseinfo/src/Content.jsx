import React from 'react';
import Part from './Part'

const Content = ({course: { parts }}) => 
  <>
    { 
    parts.map(({name, exercises}) => <Part name={name} exercise={exercises} />)
    }
  </>

export default Content;