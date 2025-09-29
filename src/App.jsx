import { useState } from "react";
import "./css/main.css";

export default function App() {
  const [by, setBy] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [temperatur, setTemperatur] = useState(null);

  async function findBy() {
    const cityInput = document.getElementById("cityInput").value;

    setBy(cityInput);

    const cityFinder = `http://api.openweathermap.org/geo/1.0/direct?q=${by}&limit=5&appid=d7dbd4f34253c695f3efc75396c59fd4`;
    fetch(cityFinder)
      .then((svar) => svar.json())
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      });
  }
  console.log(lat);
  console.log(lon);

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7dbd4f34253c695f3efc75396c59fd4&units=metric`;
  fetch(weatherURL)
    .then((svar) => svar.json())
    .then((data) => {
      console.log(data);
      setTemperatur(data.main.temp.toFixed(1));
    });

  return (
    <main className="weather-main">
      <div>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") findBy();
          }}
          className="city-input"
          type="text"
          name=""
          id="cityInput"
          placeholder="Indsæt by her:"
        />
      </div>
      <div>
        <div>
          <h3 className="city-name">Temperatur i {by}</h3>
          <h2 className="city-temp">{temperatur}</h2>
          <p></p>
        </div>
      </div>
    </main>
  );
}
