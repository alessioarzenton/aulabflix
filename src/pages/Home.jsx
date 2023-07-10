import Hero from "../Components/Hero/Hero";
import Slider from "../Components/Slider/Slider";
import MovieList from "../Components/MovieList/MovieList"

function Home() {
    return (
        <>
            <MovieList />
            <Hero />
            <Slider title="Titoli del momento" genre="now_playing" />
            <Slider title="Popolari" genre="popular" />
            <Slider title="Più votati" genre="top_rated" />
            <Slider title="In arrivo" genre="upcoming" />
        </>
    );
}

export default Home;
