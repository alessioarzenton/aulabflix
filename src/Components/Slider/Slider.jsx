import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchMovies from "./../../Hooks/useFetchMovies";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";

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

const Slider = ({ title, genre }) => {
    const url = `https://api.themoviedb.org/3/movie/${genre}?language=it-IT&api_key=a5b2c96f4f69542ba0a127cba0f1745c`;
    const { data, loading } = useFetchMovies(url, []);

    console.log(data);

    return (
        <div className="slider-parent mb-3 mb-md-5">
            <div className="container">
                <h2>{title}</h2>
            </div>
            {loading ? (
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#ffffff"
                    ariaLabel="puff-loading"
                    wrapperStyle={{'margin' : '20px auto'}}
                    wrapperClass="justify-content-center"
                    visible={true}
                />
            ) : (
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    dotListClass="custom-dot-list-style"
                >
                    {data &&
                        data.map((el) => {
                            return (
                                <div className="slider" key={el.id}>
                                    <Link to={`/details/${el.id}`}>
                                        <img
                                            src={
                                                "https://image.tmdb.org/t/p/original" +
                                                el.poster_path
                                            }
                                            alt="movie"
                                        />
                                        <div className="vote">
                                            <span>{el.vote_average}</span>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                </Carousel>
            )}
        </div>
    );
};
export default Slider;
