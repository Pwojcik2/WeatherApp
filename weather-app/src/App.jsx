import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [locationSearch, setLocationSearch] = useState('Newark')
  const [weatherObject, setWeatherObject] = useState({
    state: '',
    city: '',
    temperature: '',
    icon: '',
    feelsLike: '',
    wind: '',
    humidity: ''
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
          state: json.location.region,
          city: json.location.name,
          temperature: json.current.temp_f,
          icon: json.current.condition.icon,
          feelsLike: json.current.feelslike_f,
          wind: json.current.wind_mph,
          humidity: json.current.humidity
        })
        //console.log(json)
        setSearch(false)
      }
      fetchData()
  }, [search])

  return (
    <>
      <h1>Weather App</h1>
      <div>
       <input className='citySearch' type="text" placeholder='Enter a City' onChange={handleChange}/>
        
      <button onClick={() => setSearch(true)}>
          Get Weather
        </button>
      </div>

      <WeatherCard 
      state={weatherObject.state}
      city={weatherObject.city} 
      temperature={weatherObject.temperature}
      icon={weatherObject.icon}
      feelsLike={weatherObject.feelsLike}
      wind={weatherObject.wind}
      humidity={weatherObject.humidity}
      />

    </>
  )
}

export default App
