import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather({city}) {
  const [weather, setWeather] = useState({});

  useEffect( () => {
    axios.get(`http://api.weatherstack.com/current`, 
      { 
        params: {access_key: `${process.env.REACT_APP_API_KEY}`, query: `${city}`}
      })
      .then( response => setWeather(response.data))
      .catch(() => console.log('some error'))
    },[])

  return (
    <div>
      <p>nothing</p>
    </div>
  )
}

export default Weather;