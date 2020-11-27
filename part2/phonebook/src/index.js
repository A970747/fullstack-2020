import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Numbers from './Numbers'
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNum, setNewNum ] = useState('');
  const [ filterValue, setFilterValue ] = useState('')

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