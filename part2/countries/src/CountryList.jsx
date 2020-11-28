import React from 'react';

function CountryList({data, setIndexSearch}) {

  return (
    <div>
      {
        data.map( country => {
          return (
            <div className="countryWithButton">
              <p>{country.name}</p>
              <button onClick={() => setIndexSearch(country.name)}>show</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default CountryList;