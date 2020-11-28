import React, { useState, useEffect } from 'react';

function Country({data: [country]}) {

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Languages: </p>
      <ul>
        {
          country.languages.map( language => <li>{language.name}</li>)
        }
      </ul>
      <img src={country.flag} alt={`the flag of ${country.name}`}/>
    </div>
  )
}

export default Country;