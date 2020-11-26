import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Numbers from './Numbers'
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040 - 1234567'  }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')

  function handleNameInput(event) {
    event.preventDefault();
    setNewName(event.target.value);
  }

  function handleNumInput(event) {
    event.preventDefault();
    setNewNum(event.target.value);
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

      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);