import { useState } from "react";
import './css/main.css'
export default function App() {

  const [by, setBy] = useState("")

  const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=55.7186117&lon=11.7135474&appid=d7dbd4f34253c695f3efc75396c59fd4";

  const cityFinder = `http://api.openweathermap.org/geo/1.0/direct?q={by}}&limit=5&appid=d7dbd4f34253c695f3efc75396c59fd4`

  const [temperatur, setTemperatur] = useState(0)

  return (
  <main>
    <div>
      <input type="text" name="" id="" />
      <button onClick={super()}></button>
    </div>
    <div>
      <div>
        <h3></h3>
        <h2>{temperatur - 273}</h2>
        </div>
    </div>
  </main>
  )
}

