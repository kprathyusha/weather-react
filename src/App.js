import "./App.css";
import Form from "./Form";
// import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="Wrapper">
            <div className="App">
                <Form />
                {/* <hr />
                 <Weather />  */}
                <hr />
            </div>
            <Footer />
        </div>
    );
}
