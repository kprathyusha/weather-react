import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    const apiKey = "f64f24c2cb65bc7a2a8ea12b29366908";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
        //console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                        <h6>{forecast[0].dt}</h6>
                        <img
                            src={forecast[0].weather[0].icon}
                            alt="clear"
                            width="45"
                        />
                        <p>
                            <span className="max-temperature">
                                {forecast[0].temp.max}°
                            </span>
                            <span className="min-temperature">
                                {forecast[0].temp.min}°
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
