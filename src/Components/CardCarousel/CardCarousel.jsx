function CardCarousel(props) {
    return <>
        <li className="card">
            <img src={props.backdrop_path} alt={props.title} className="img-fluid"/>
            <h4 className="mt-3">{props.title}</h4>
        </li>
    </>
}

export default CardCarousel