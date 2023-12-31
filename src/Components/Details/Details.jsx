import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Context } from "../../Context/Wishlist";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Details() {
    const { handleFavourite, isFav } = useContext(Context);
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?language=it-IT&api_key=${
        import.meta.env.VITE_API_KEY
    }`;
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

    // console.log(post);

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
                <section className="details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                {post.backdrop_path ? (
                                    <LazyLoadImage
                                        className="img-fluid"
                                        src={
                                            import.meta.env.VITE_POSTER_PATH +
                                            post.backdrop_path
                                        }
                                        alt="movie"
                                        style={{ borderRadius: "10px" }}
                                    />
                                ) : (
                                    <LazyLoadImage
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
                                <div className="star mt-2">
                                    {isFav(post.id) ? (
                                        <BsStarFill
                                            style={{ cursor: "pointer", width: "30px", height: "30px" }}
                                            onClick={() =>
                                                handleFavourite(post)
                                            }
                                        />
                                    ) : (
                                        <BsStar
                                            style={{ cursor: "pointer", width: "30px", height: "30px" }}
                                            onClick={() =>
                                                handleFavourite(post)
                                            }
                                        />
                                    )}
                                </div>
                                {post.original_title && (
                                    <h1 className="mt-2">{post.title}</h1>
                                )}
                                {post.overview && <p>{post.overview}</p>}
                                <div className="d-flex">
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
