import { Link } from "react-router-dom"

function Hero() {
    return <>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
                <h1 className="display-3 fw-bold">Aulab Movies</h1>
                <h3 className="fw-normal mb-3">Cerca il film che desideri</h3>
                <Link to="/search" className="btn btn-danger">Inizia</Link>
            </div>
        </div>
    </>
}

export default Hero