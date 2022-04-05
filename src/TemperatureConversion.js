import React, { useState } from "react";

export default function TemperatureConversion(props) {
    let [unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function fahrenheitTemp() {
        return Math.round((props.celsiusTemp * 5) / 9 + 32);
    }
    if (unit === "celsius") {
        return (
            <div>
                <span className="temperature">{props.celsiusTemp}</span>
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
                <span className="temperature">{fahrenheitTemp()}</span>
                <span className="units">
                    <a href="/" onCilck={showCelsius}>
                        °C{" "}
                    </a>
                    | °F
                </span>
            </div>
        );
    }
}
