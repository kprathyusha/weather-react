import React from "react";

export default function FormattedDate(props) {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let currentDay = days[props.date.getDay()];
    let currentMonth = months[props.date.getMonth()];
    let currentDate = props.date.getDate();
    let currentHour = props.date.getHours();
    let currentMinutes = props.date.getMinutes();
    let amPm = currentHour < 12 ? "a.m" : "p.m";

    if (currentHour > 12) {
        currentHour = currentHour - 12;
    } else if (currentHour === 0) {
        currentHour = 12;
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    return (
        <span>
            {currentDay}, {currentMonth} {currentDate}, {currentHour}:
            {currentMinutes} {amPm}
        </span>
    );
}
