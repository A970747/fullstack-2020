import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { unstable_concurrentAct } from 'react-dom/test-utils';

function Weather({city}) {
  const [weather, setWeather] = useState({});

  useEffect( () => {
    axios.get(`http://api.weatherstack.com/current`, 
      { 
        params: {access_key: `${process.env.REACT_APP_API_KEY}`, query: `${city}`}
      })
      .then( response => setWeather(response.data))
      .catch(() => console.log('some error'))
    },[city])

  return (
    (weather.current)
      ? <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.current.temperature} Celsius</p>
          <img src={weather.current.weather_icons[0]} alt={`Weather description: ${weather.current.weather_descriptions[0]}`}/>
          <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir} </p>
        </div>
      : null
  )
}

export default Weather;