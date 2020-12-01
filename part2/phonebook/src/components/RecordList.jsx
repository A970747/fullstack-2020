import React from 'react';

const RecordList = ({records, deleteRecord}) => {
  return (
    <ul>
    {
      records.map(record => 
        <li key={record.name}>
          {record.name} {record.number}
          <button onClick={() => deleteRecord(record.id)}>
            delete
          </button>
        </li>
        )
    }
    </ul>
  )
}

export default RecordList;