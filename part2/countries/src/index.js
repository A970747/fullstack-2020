import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Country from './Country'
import CountryList from './CountryList'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if(searchTerm){
      axios.get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
        .then( response => setCountryData(response.data))
        .catch(() => console.log('API returned a 404 response, likely unfound country name.') );
    }
  },[searchTerm]);

  function handleSearchInput(event) {
    setSearchTerm(event.target.value)
  } 

  return (
    <div>
      <p>find countries:
        <input type="text" onChange={handleSearchInput} value={searchTerm}/>
      </p>
      {
        (countryData.length === 1)
          ? <Country data={countryData} />
          : <CountryList data={countryData} setIndexSearch={term => setSearchTerm(term)} />
      }
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
