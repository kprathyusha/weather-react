import React from "react";
import "./Weather.css";
import WeatherIcon from "./media/cloudy.png";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="current-city">
                <h1>Toronto</h1>
                <h4>CA</h4>
                <p className="date-time" id="dateTime">
                    Friday, Mar 25, 4:30 p.m
                </p>
            </div>
            <div className="row current-city-details">
                <div className="col-sm-4 align-self-center">
                    <img src={WeatherIcon} alt="clear" className="icon" />
                </div>
                <div className="col-sm-4 align-self-center">
                    <span className="temperature">10</span>
                    <span className="units">
                        <a href="/" className="celsius active">
                            °C
                        </a>
                        |
                        <a href="/" className="fahrenheit">
                            °F
                        </a>
                    </span>
                    <div>
                        Feels like
                        <span className="temperature-feels-like"> 8</span>
                    </div>
                </div>
                <div className="col-sm-4 align-self-center">
                    <ul className="pattern">
                        <li className="description">Cloudy</li>
                        <li>
                            Humidity:
                            <span className="humidity">85%</span>
                        </li>
                        <li>
                            Wind: <span className="wind">15 km/h</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
