import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [locationSearch, setLocationSearch] = useState('London')
  const [weatherObject, setWeatherObject] = useState({
    location: '',
    temperature: ''
  })
  const [search, setSearch] = useState(false)

  const url = `http://api.weatherapi.com/v1/current.json?key=14d70ead84904419ada154523241610&q=${locationSearch}&aqi=yes`

  const handleChange = (e) => {
    setLocationSearch(e.target.value)
  }

  useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json()
        setWeatherObject({
          location: json.location.name,
          temperature: json.current.temp_f
        })
        console.log(json)
        setSearch(false)
      }
      fetchData()
  }, [search])

  return (
    <>
      <h1>Weather App</h1>
        <label>
        Search Location: <input type="text" placeholder='Enter a City' onChange={handleChange}/>
        </label>

      <div>
      <button onClick={() => setSearch(true)}>
          Search
        </button>
      </div>

      <WeatherCard />

      <h1>Current Location: {weatherObject.location}</h1>
      <h1>Current Temp: {weatherObject.temperature}°F</h1>
    </>
  )
}

export default App
