import Hero from "../Components/Hero/Hero";
import Slider from "../Components/Slider/Slider";
import useFetchGenres from "../Hooks/useFetchGenres";
import { Puff } from "react-loader-spinner";

function Genres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=it-IT&api_key=${
        import.meta.env.VITE_API_KEY
    }`;

    const { data, loading } = useFetchGenres(url, []);

    return (
        <>
            <Hero />
            {loading ? (
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#ffffff"
                    ariaLabel="puff-loading"
                    wrapperStyle={{ margin: "20px auto" }}
                    wrapperClass="justify-content-center"
                    visible={true}
                />
            ) : (
                data &&
                data.map((g) => (
                    <Slider key={g.id} title={g.name} cat_id={g.id} />
                ))
            )}
        </>
    );
}

export default Genres;
