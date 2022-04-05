import React from "react";
import "./Weather.css";
// import WeatherIcon from "./media/cloudy.png";

export default function Weather(props) {
    return (
        <div className="Weather">
            <div className="current-city">
                <h1>{props.details.city}</h1>
                <h4>{props.details.country}</h4>
                <p className="date-time" id="dateTime">
                    Friday, Mar 25, 4:30 p.m
                </p>
            </div>
            <div className="row current-city-details">
                <div className="col-sm-4 align-self-center">
                    <img
                        src={props.details.icon}
                        alt={props.details.description}
                        className="icon"
                    />
                </div>
                <div className="col-sm-4 align-self-center">
                    <span className="temperature">
                        {props.details.temperature}
                    </span>
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
                        <span className="temperature-feels-like">
                            {" "}
                            {props.details.feelsLike}°
                        </span>
                    </div>
                </div>
                <div className="col-sm-4 align-self-center">
                    <ul className="pattern">
                        <li className="description">
                            {props.details.description}
                        </li>
                        <li>
                            Humidity:{" "}
                            <span className="humidity">
                                {props.details.humidity}%
                            </span>
                        </li>
                        <li>
                            Wind:{" "}
                            <span className="wind">
                                {props.details.wind}km/h
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
