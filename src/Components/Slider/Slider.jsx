import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchMovies from "../../Hooks/useFetchMovies";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
    },
};

const Slider = ({title, genre}) => {

    const url = `https://api.themoviedb.org/3/movie/${genre}?language=it-IT&api_key=45889e342ed076bf952461d661d468d8`;
    const { data } = useFetchMovies(url, []);

    // console.log(data.results);

    return (
        <div className="slider-parent mb-3 mb-md-5">
            <div className="container">
                <h2>{title}</h2>
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {data && data.results.map((el) => {
                    return (
                        <div className="slider" key={el.id}>
                            <img src={'https://image.tmdb.org/t/p/original' + el.poster_path} alt="movie" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;
