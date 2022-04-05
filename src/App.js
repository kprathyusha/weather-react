import "./App.css";
import SearchWeather from "./SearchWeather";
// import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="Wrapper">
            <div className="App">
                <SearchWeather defaultCity="Toronto" />
                {/* <hr />
                <Weather /> */}
                <hr />
            </div>
            <Footer />
        </div>
    );
}
