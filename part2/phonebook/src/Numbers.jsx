import React from 'react';
import Record from './Record';

const Numbers = ({persons}) => {

  return (
    <div>
      {
        persons.map(record => <Record key={record.name} name={record.name} />)
      }
    </div>
  )
}

export default Numbers;