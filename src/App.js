import "./App.css";
import SearchWeather from "./SearchWeather";

import Footer from "./Footer";

export default function App() {
    return (
        <div className="Wrapper">
            <div className="App">
                <SearchWeather defaultCity="Toronto" />
            </div>
            <Footer />
        </div>
    );
}
