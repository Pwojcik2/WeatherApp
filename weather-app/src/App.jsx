import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [locationSearch, setLocationSearch] = useState('London')
  const [temperature, setTemperature] = useState()
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState(false)

  const url = `http://api.weatherapi.com/v1/current.json?key=14d70ead84904419ada154523241610&q=${locationSearch}&aqi=yes`

  const handleInput = (e) => {
    setLocationSearch(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      result.json().then(json => {
        setTemperature(json.current.temp_f)
        console.log(json)
        setSearch(false)
      })
    }
    fetchData()
  }, [search])

  return (
    <>
      <h1>Weather App</h1>

      <label>
        Search Location: <input type="text" value={locationSearch} onChange={handleInput}/>
      </label>
      <button onClick={() => setSearch(true)}>
          Search
        </button>

      <h1>Current Temp: {temperature}</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count + {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count - {count}
        </button>
      </div>
    </>
  )
}

export default App
