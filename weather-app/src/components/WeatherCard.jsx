export default function WeatherCard({location, temperature, icon}) {

    return (
    <>
    <div className="weatherCard">
    <img src={icon}></img>
        <h2>Current Location: {location}</h2>
        <h2>Current Temp: {temperature}°F</h2>
    </div>
    </>
    )
}