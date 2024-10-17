export default function WeatherCard({state, city, temperature, icon, feelsLike, wind, humidity}) {

    return (
    <>
    <div className="weatherCard">
        <img src={icon}></img>
        <h3>{state}, {city}</h3>
        <h3>Current Temp: {temperature}°F</h3>
        <h3>Feels Like: {feelsLike}°F</h3>
        <h3>Humidity: {humidity}%</h3>
        <h3>Wind: {wind} mph</h3>
    </div>
    </>
    )
}