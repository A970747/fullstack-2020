import React from 'react';
import Record from './Record';

const Numbers = ({persons}) => {

  return (
    <div>
    {
      persons.map(record => <Record key={record.name} name={record.name} number={record.number}/>)
    }
    </div>
  )
}

export default Numbers;