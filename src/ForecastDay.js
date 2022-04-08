import React from "react";

export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <h6>{day()}</h6>
            <img
                src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
                alt="clear"
                width="45"
            />
            <p>
                <span className="max-temperature">
                    {Math.round(props.data.temp.max)}°
                </span>
                <span className="min-temperature">
                    {Math.round(props.data.temp.min)}°
                </span>
            </p>
        </div>
    );
}
