import { useEffect, useState } from "react";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_API_KEY;

export function getWeather(city) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => setWeather(data))
    }, [city]);

    return weather;
}