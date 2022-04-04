import React from "react";
import "./Form.css";

export default function Form() {
    return (
        <div>
            <form className="Form">
                <input
                    type="search"
                    className="search-city"
                    placeholder="Enter your city"
                    autoFocus="off"
                />
                <input
                    type="submit"
                    className="btn btn-outline-light search-btn"
                    value="Search"
                />

                <button
                    type="button"
                    className="btn btn-outline-light location-btn"
                >
                    <i className="fa-solid fa-location-dot"></i>
                </button>
            </form>
        </div>
    );
}
