import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";
import { Puff } from "react-loader-spinner";

function Search() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounceSearched = useDebounce(query, 2000);

    useEffect(() => {
        setLoading(true);
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
                    <div className="d-flex gap-3 justify-content-center lead fw-normal">
                        <div className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="star w..."
                                aria-label="Search"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Link to="/" className="btn btn-dark">
                                Home
                            </Link>
                        </div>
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
                            {data ? (
                                data.map((el) => (
                                    <div
                                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                                        key={el.id}
                                    >
                                        <div className="wrapper">
                                            <Link to={`/details/${el.id}`}>
                                                <img
                                                    src={
                                                        "https://image.tmdb.org/t/p/original" +
                                                        el.poster_path
                                                    }
                                                    alt="movie"
                                                    className="img-fluid"
                                                />
                                                {el.vote_average > 0 && (
                                                    <div className="vote">
                                                        <span>
                                                            {el.vote_average.toFixed(
                                                                1
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <h3>Nessun Risultato, riprova!</h3>
                                </div>
                            )}
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
        `https://api.themoviedb.org/3/search/movie?query=${searched}&include_adult=false&language=it-IT&api_key=a5b2c96f4f69542ba0a127cba0f1745c`
    )
        .then((r) => r.json())
        .then((r) => r.results)
        .catch((e) => console.log(e));
}
