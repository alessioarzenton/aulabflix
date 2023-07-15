import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../Pdf/Movie";
import { useContext } from "react";
import { Context } from "../../Context/Wishlist";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

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
                        <div className="wrapper-buttons">
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
                            >
                                {({ loading }) =>
                                    loading
                                        ? "Loading..."
                                        : `Download - ${moviesWishList.length}`
                                }
                            </PDFDownloadLink>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
