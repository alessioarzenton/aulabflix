import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../Pdf/Movie";
import { useContext } from "react";
import { Context } from "../../Context/Wishlist";
import { Link } from "react-router-dom";

export default function NavBar() {
    const { moviesWishList } = useContext(Context);
    // console.log(moviesWishList);
    return (
        <nav className="navbar bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-danger">
                    AULABFLIX
                </Link>
                {moviesWishList.length > 0 && (
                    <PDFDownloadLink
                        document={<PdfDocument data={moviesWishList} />}
                        fileName="movielist.pdf"
                        className="btn btn-light"
                    >
                        {({ blob, url, loading, error }) =>
                            loading
                                ? "Loading..."
                                : `Download Pdf${" - " + moviesWishList.length + ' movies'}`
                        }
                    </PDFDownloadLink>
                )}
            </div>
        </nav>
    );
}
