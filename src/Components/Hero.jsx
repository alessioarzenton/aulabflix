function Hero() {
    return <>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
                <h1 className="display-3 fw-bold">Aulab Movies</h1>
                <h3 className="fw-normal mb-3">Cerca il film che desideri</h3>
                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="stranger things..." aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Cerca</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Hero