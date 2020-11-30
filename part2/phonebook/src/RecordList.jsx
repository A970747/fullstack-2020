import React from 'react';
import Record from './Record';

const RecordList = ({records}) => {

  return (
    <div>
    {
      records.map(record => <Record key={record.name} name={record.name} number={record.number}/>)
    }
    </div>
  )
}

export default RecordList;