import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Numbers from './Numbers';
import axios from 'axios';
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNum, setNewNum ] = useState('');
  const [ filterValue, setFilterValue ] = useState('')

  useEffect(() => {
      axios.get('http://localhost:3001/persons')
        .then(response => setPersons(response.data))
  }, [])

  function addPerson(event) {
    event.preventDefault();
    let allPhonebookNames = persons.map(person => person.name);
    (!allPhonebookNames.includes(newName))
      ? setPersons(persons.concat(personMaker(newName, newNum)))
      : alert(`${newName} already exists!`)
    setNewName('');
    setNewNum('');
  }

  function personMaker(name, number = null) {
    if(number) {
      number = Array.from(number.toString());
      number.splice(3,0,' - ');
    }

    return {
      name,
      number
    }
  }

  function handleNameInput(event) {
    event.preventDefault();
    setNewName(event.target.value);
  }

  function handleNumInput(event) {
    event.preventDefault();
    setNewNum(event.target.value);
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
      <form onSubmit={addPerson} >
        <div>
          name: <input placeholder='enter name...' value={newName} 
          onChange={handleNameInput} />
        </div>
        <div>
          number: <input placeholder='enter number...' value={newNum} 
          onChange={handleNumInput} maxLength='10' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>People</h2>
      {
      (filterValue)
        ? <Numbers persons={persons.filter(person => {
            if(person.name.toLowerCase().includes(filterValue.toLowerCase())) {
              return person
            }
          })} />
        : <Numbers persons={persons}/>
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