import Hero from "./Components/Hero";
import Slider from "./Components/Slider/Slider";

function App() {
    return (
        <>
            <Hero />
            <Slider title="Titoli del momento" genre="now_playing" />
            <Slider title="Popolari" genre="popular" />
            <Slider title="Più votati" genre="top_rated" />
            <Slider title="In arrivo" genre="upcoming" />
        </>
    );
}

export default App;
