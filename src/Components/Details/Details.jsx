import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";

function Details() {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?language=it-IT&api_key=a5b2c96f4f69542ba0a127cba0f1745c`;
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect se cambia l'url
    useEffect(() => {
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                setLoading(false);
                setPost(r);
            });
    }, [url]);

    console.log(post);
    return (
        <>
            {loading ? (
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#ffffff"
                    ariaLabel="puff-loading"
                    wrapperStyle={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,0)",
                    }}
                    wrapperClass="position-absolute"
                    visible={true}
                />
            ) : (
                <section className="details py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                {post.backdrop_path ? (
                                    <img
                                        className="img-fluid"
                                        src={
                                            "https://image.tmdb.org/t/p/original" +
                                            post.backdrop_path
                                        }
                                        alt="movie"
                                        style={{ borderRadius: "10px" }}
                                    />
                                ) : (
                                    <img
                                        className="img-fluid"
                                        src="https://placehold.co/600x400?text=Movie+Image"
                                        alt="movie"
                                        style={{ borderRadius: "10px" }}
                                    />
                                )}
                                {post.status && (
                                    <div className="mt-2 lead">
                                        Status: <b>{post.status}</b>
                                    </div>
                                )}
                                {post.vote_average > 0 && (
                                    <div className="mt-2 text-danger lead">
                                        Voto:{" "}
                                        <b>{post.vote_average.toFixed(1)}</b>
                                    </div>
                                )}
                                {post.original_title && (
                                    <h1 className="h1">
                                        {post.title}
                                    </h1>
                                )}
                                {post.overview && <p>{post.overview}</p>}
                                <div className="d-flex">
                                    <Link to="/" className="btn btn-dark mt-3 me-3">
                                        Vai alla home
                                    </Link>
                                    <Link
                                        to="/search"
                                        className="btn btn-danger mt-3"
                                    >
                                        Vai alla Ricerca
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Details;
