import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import RecordList from './RecordList';
import recordService from './services/recordService';
import './index.css';

const App = () => {
  const [ records, setRecords ] = useState([]);
  const [ name, setname ] = useState('');
  const [ number, setnumber ] = useState('');
  const [ filterValue, setFilterValue ] = useState('')

  useEffect( () => {
    recordService.getRecords().then(records => setRecords(records));
  }, [])

  function addRecord(event) {
    event.preventDefault();
    let record = recordMaker(name, number);

    recordService.createRecord(record)
      .then(record => setRecords(records.concat(record)))

    setname('');
    setnumber('');
  }

  function recordMaker(name, numberFromState = null) {
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
    setname(event.target.value);
  }

  function handleNumInput(event) {
    event.preventDefault();
    setnumber(event.target.value);
  }

  function handleFilterValueInput(event) {
    event.preventDefault();
    setFilterValue(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Filter</h2>
      <div>
        name: <input placeholder='Filter by...' value={filterValue} 
        onChange={handleFilterValueInput} />
      </div>
      <h2>Add new record</h2>
      <form onSubmit={addRecord} >
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
        ? <RecordList records={records.filter(person => 
            (person.name.toLowerCase().includes(filterValue.toLowerCase())) ? true : false)}
          />
        : <RecordList records={records}/>
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