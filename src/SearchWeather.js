import React, { useState } from "react";
import axios from "axios";
import "./SearchWeather.css";
import Weather from "./Weather";

export default function SearchWeather(props) {
    const [weatherDetails, setWeatherDetails] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function search() {
        const apiKey = "f64f24c2cb65bc7a2a8ea12b29366908";
        const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
        let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(showWeather);
    }

    function showWeather(response) {
        setWeatherDetails({
            ready: true,
            city: response.data.name,
            country: response.data.sys.country,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed * 3.6),
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            feelsLike: Math.round(response.data.main.feels_like),
            date: new Date(response.data.dt * 1000),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherDetails.ready) {
        return (
            <div>
                <form className="SearchWeather" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        className="search-city"
                        placeholder="Enter your city"
                        autoFocus="off"
                        onChange={handleCityChange}
                    />
                    <input
                        type="submit"
                        className="btn btn-outline-light search-btn"
                        value="Search"
                    />
                </form>
                <hr />
                <Weather details={weatherDetails} />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}
