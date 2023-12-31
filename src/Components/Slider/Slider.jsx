import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetchMovies from "./../../Hooks/useFetchMovies";
import { Link } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../Context/Wishlist";
import { LazyLoadImage } from "react-lazy-load-image-component";

const responsive = {
    xLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
    },
    largeDesktop: {
        breakpoint: { max: 3000, min: 2000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1.5,
    },
};

const Slider = ({ title, genre, cat_id }) => {
    const { handleFavourite, isFav } = useContext(Context);
    const url = genre
        ? `https://api.themoviedb.org/3/movie/${genre}?language=it-IT&api_key=${
                import.meta.env.VITE_API_KEY
            }`
        : `https://api.themoviedb.org/3/discover/movie?api_key=${
                import.meta.env.VITE_API_KEY
            }&with_genres=${cat_id}`;
    const { data, loading } = useFetchMovies(url, []);

    return (
        <div className="slider-parent">
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
                    wrapperStyle={{ margin: "20px auto" }}
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
                                        {el.poster_path ? (
                                            <LazyLoadImage
                                                src={
                                                    import.meta.env
                                                        .VITE_POSTER_PATH +
                                                    el.poster_path
                                                }
                                                alt="movie"
                                            />
                                        ) : (
                                            <LazyLoadImage src="https://placehold.co/400x600?text=Movie+Image" />
                                        )}
                                    </Link>
                                    {el.vote_average > 0 && (
                                        <div className="vote">
                                            <span>
                                                {el.vote_average.toFixed(1)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="star">
                                        {isFav(el.id) ? (
                                            <BsStarFill
                                                onClick={() =>
                                                    handleFavourite(el)
                                                }
                                            />
                                        ) : (
                                            <BsStar
                                                onClick={() =>
                                                    handleFavourite(el)
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </Carousel>
            )}
        </div>
    );
};
export default Slider;
