import { getWeather } from "./utils/getWeather";

export default function App() {
  const weather = getWeather("copenhagen");
  if(!weather) return null;

  return (
    <main className="container">
      <div className="weather-card">
        <header className="weather-header">
          <h1 className="weather-city">
            {weather.name}
          </h1>
        </header>

        <section className="weather-temperature">
          {weather.main.temp}°
        </section>

        <div className="weather-icon-container">
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={`Weather icon: ${weather.weather[0].description}`}
            tabIndex={0}
          />
        </div>

        <div className="weather-description">
          <span className="weather-description-title">
            {weather.weather[0].main}
          </span>
          <span className="weather-description-temperature">
            H: {weather.main.temp_max}°  L: {weather.main.temp_min}°
          </span>
        </div>
      </div>
    </main>
  );
}