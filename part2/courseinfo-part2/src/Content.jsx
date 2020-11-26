import React from 'react';
import Part from './Part';

const Content = ({course: { parts, ...rest}}) => 
  <>
    { 
    parts.map(({name, exercises, id}) => <Part key={id} name={name} exercise={exercises} />)
    }
  </>

export default Content;