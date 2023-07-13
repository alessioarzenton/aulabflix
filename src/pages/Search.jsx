import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";
import { Puff } from "react-loader-spinner";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Context } from "../Context/Wishlist";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Search() {
    const { handleFavourite, isFav } = useContext(Context);
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounceSearched = useDebounce(query, 1000);

    useEffect(() => {
        API(debounceSearched).then((r) => {
            setLoading(false);
            setData(r);
        });
    }, [debounceSearched]);

    // console.log(data);

    return (
        <>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 className="display-3 fw-bold text-danger mb-2">
                        AULABFLIX
                    </h1>
                    <div className="d-flex gap-2 justify-content-center lead fw-normal">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="star w..."
                            aria-label="Search"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value)
                                setLoading(true)
                            }}
                        />
                        <button
                            className="btn btn-info"
                            onClick={() => setQuery("")}
                        >
                            Reset
                        </button>
                    </div>
                </div>
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
                <section className="card-list">
                    <div className="container-fluid">
                        <div className="row">
                            {data &&
                                data.map((el) => (
                                    <div
                                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                                        key={el.id}
                                    >
                                        <div className="wrapper">
                                            <Link to={`/details/${el.id}`}>
                                                {el.poster_path ? (
                                                    <LazyLoadImage
                                                        src={
                                                            import.meta.env
                                                                .VITE_POSTER_PATH +
                                                            el.poster_path
                                                        }
                                                        alt="movie"
                                                        className="img-fluid"
                                                    />
                                                ) : (
                                                    <LazyLoadImage src="https://placehold.co/400x600?text=Movie+Image" />
                                                )}
                                            </Link>
                                            {el.vote_average > 0 && (
                                                <div className="vote">
                                                    <span>
                                                        {el.vote_average.toFixed(
                                                            1
                                                        )}
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
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Search;

function API(searched) {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searched}&include_adult=false&language=it-IT&api_key=${
            import.meta.env.VITE_API_KEY
        }`
    )
        .then((r) => r.json())
        .then((r) => r.results)
        .catch((e) => console.log(e));
}
