import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../Pdf/Movie";
import { useContext } from "react";
import { Context } from "../../Context/Wishlist";
import { Link } from "react-router-dom";
import { BsFillFilePdfFill, BsFillTrashFill } from "react-icons/bs";
import { Puff } from "react-loader-spinner";

export default function NavBar() {
    const { moviesWishList, setmoviesWishList } = useContext(Context);

    return (
        <nav className="navbar bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-danger">
                    AULABFLIX
                </Link>
                {moviesWishList.length > 0 && (
                    <>
                        <div className="d-flex">
                            <button
                                className="btn btn-warning me-2"
                                onClick={() => setmoviesWishList([])}
                            >
                                <BsFillTrashFill />
                            </button>
                            <PDFDownloadLink
                                document={<PdfDocument data={moviesWishList} />}
                                fileName="movielist.pdf"
                                className="btn btn-light"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                }}
                            >
                                {({ loading }) =>
                                    loading ? (
                                        <Puff
                                            height="20"
                                            width="20"
                                            radius={1}
                                            color="#000000"
                                            ariaLabel="puff-loading"
                                            wrapperClass="justify-content-center"
                                            visible={true}
                                        />
                                    ) : (
                                        <>
                                            <BsFillFilePdfFill />{" "}
                                            <span>
                                                - {moviesWishList.length}
                                            </span>
                                        </>
                                    )
                                }
                            </PDFDownloadLink>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
