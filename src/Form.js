import React from "react";
import axios from "axios";
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
            </form>
        </div>
    );
}
