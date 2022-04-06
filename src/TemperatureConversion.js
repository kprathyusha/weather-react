import React, { useState } from "react";

export default function TemperatureConversion(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheitTemp() {
        return (props.celsiusTemp * 5) / 9 + 32;
    }

    if (unit === "celsius") {
        return (
            <div>
                <span className="temperature">
                    {Math.round(props.celsiusTemp)}
                </span>
                <span className="units">
                    °C |
                    <a href="/" onClick={showFahrenheit}>
                        °F
                    </a>
                </span>
            </div>
        );
    } else {
        return (
            <div>
                <span className="temperature">
                    {Math.round(fahrenheitTemp())}
                </span>
                <span className="units">
                    <a href="/" onClick={showCelsius}>
                        °C{" "}
                    </a>
                    | °F
                </span>
            </div>
        );
    }
}
