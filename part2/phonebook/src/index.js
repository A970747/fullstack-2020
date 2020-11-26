import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Numbers from './Numbers'
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  function handleNameInput(event) {
    event.preventDefault();
    setNewName(event.target.value);
  }

  function addPerson(event) {
    event.preventDefault();
    setPersons(persons.concat(personMaker(newName, null)))
    setNewName('');
  }

  function personMaker(name, phone = null) {
    return {
      name,
      phone
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input placeholder='enter name...' value={newName} onChange={handleNameInput} />
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