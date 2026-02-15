import { ApiData } from "../App";
import { useContext, useState } from "react";
import axios from "axios";

const Api = () => {
    const WeatherList = useContext(ApiData);

    const [weather, setWeather] = useState(null);

    // handleReport
    const handleReport = async () => {
        try {
            const res = await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${WeatherList.city}&appid=77ac4b7777b731ad602cd436ea9c491f&units=metric`
            );

            setWeather(res.data);
        } catch (err) {
            alert("Error fetching weather data. Please check the city name and try again.");
        }
    };

    return (
        <div className="rounded-lg bg-gradient-to-bl from-cyan-600 to-blue-900 p-4 text-white">
            <h1 className="text-3xl text-amber-400 mb-2">Weather App</h1>

            <p className="text-orange-300 mb-2">
                You can get your Local Weather report here...
            </p>

            <input
                className="rounded-lg p-1 text-black"
                type="text"
                placeholder="Enter your city..."
                onChange={(e) => WeatherList.setcity(e.target.value)}
            />
            <br />
            <button
                className="bg-slate-800 rounded-lg p-1 mt-2 hover:bg-slate-600 transition duration-300  text-white"
                onClick={handleReport}
            >
                Get Report
            </button>

            {/* Display Weather */}
            {weather ?(
                <div className="mt-5 grid grid-rows-3 gap-2">
                    <p>Weather : {weather.weather[0].main}</p>
                    <p>Temperature : {weather.main.temp} °C</p>
                    <p>Description : {weather.weather[0].description}</p>
                </div>
            ):<div className="mt-5 text-red-400">No weather data available since no city was entered.</div>}
        </div>
    );
};

export default Api;
