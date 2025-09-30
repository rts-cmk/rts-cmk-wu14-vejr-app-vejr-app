import { getWeather } from "./utils/getWeather";
import { formatDate } from "./utils/utils";

export default function App() {
  const weather = getWeather("copenhagen");
  if(!weather) return null;

  return (
    <>
      <div>
        <time dateTime="2025-06-05">{formatDate(new Date("2025-06-5"))}</time>
        <h1 className="text-2xl font-bold">{weather.name}</h1>


        <figure>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        </figure>
      </div>
    </>
  );
}