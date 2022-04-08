import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function load() {
        const apiKey = "3bc657df34a7bf7caefd63572d2a7bfd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="Forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index > 0 && index < 7) {
                            return (
                                <div className="col">
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        load();
        return null;
    }
}
