import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../Pdf/Movie";
import { useContext } from "react";
import { Context } from "../../Context/Wishlist";

export default function MovieList() {
    const { moviesWishList } = useContext(Context);

    return (
        <div className="container">
            <h2>Wish List</h2>
            <PDFDownloadLink
                document={<PdfDocument data={moviesWishList} />}
                fileName="movielist.pdf"
                style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a",
                }}
                className="btn btn-success"
            >
                {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download Pdf"
                }
            </PDFDownloadLink>
        </div>
    );
}
