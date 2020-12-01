import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import RecordList from './components/RecordList';
import recordService from './services/recordService';
import './index.css';

const App = () => {
  const [ records, setRecords ] = useState([]);
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ filterValue, setFilterValue ] = useState('')

  useEffect( () => {
    recordService.getRecords()
      .then(records => setRecords(records))
      .catch( error => console.log(error));
  }, [])

  function createRecord(event) {
    event.preventDefault();

    if(records.some(each => each.name.toLowerCase() === name.toLowerCase())) {
      updateRecord();
    }
    else {
      let record = recordFactory(name, number);

      recordService.createRecord(record)
        .then(returnedRecord => setRecords(records.concat(returnedRecord)))

      setName('');
      setNumber('');
    }
  }

  function updateRecord() {
    let tempObj = recordFactory(name,number);

    let recordToUpdate = records.filter( 
      record => record.name.toLowerCase().includes(name.toLowerCase()))[0]

      if(window.confirm(`${name} already exists. Do you want to replace the existing number?`)) {
        recordService.updateRecord(recordToUpdate.id, {...recordToUpdate, number: tempObj.number})
          .then(records => 
            recordService.getRecords()
              .then(records => setRecords(records)))
          .catch(error => console.log(error));
      }
    setName('');
    setNumber('');
  }

  function deleteRecord(id, name) {
    if(window.confirm(`Are you sure you want to delete ${name}?`)) {
      recordService.deleteRecord(id)
        .then(data => setRecords(records.filter(each => each.id !== id)))
        .catch(error => console.log(error));
    }
  }

  function recordFactory(name, numberFromState = null) {
    let number = numberFromState

    if(number) {
      number = Array.from(number.toString());
      number.splice(3,0,' - ');
      number = number.join('');
    }

    return { name, number }
  }

  function handleNameInput(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleNumInput(event) {
    event.preventDefault();
    setNumber(event.target.value);
  }

  function handleFilterValueInput(event) {
    event.preventDefault();
    setFilterValue(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Filter</h2>
      <div>
        name: <input placeholder='Filter by...' value={filterValue} 
        onChange={handleFilterValueInput} />
      </div>

      <h2>Add new record</h2>
      <form onSubmit={createRecord} >
        <div>
          name: <input placeholder='enter name...' value={name} 
          onChange={handleNameInput} />
        </div>
        <div>
          number: <input placeholder='enter number...' value={number} 
          onChange={handleNumInput} maxLength='10' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>People</h2>
      {
      (filterValue)
        ? <RecordList records={ records.filter(record => 
            (record.name.toLowerCase().includes(filterValue.toLowerCase())) 
              ? true : false) }
            deleteRecord={id => deleteRecord(id)}
          />       
        : <RecordList records={records} deleteRecord={deleteRecord}/>
      }
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);