function CardCarousel(props) {
    return <>
        <li className="card">
            <span className="material-icons">{props.img}</span>
            <img src="https://placehold.co/600x400" alt={props.title} />
            <h4>{props.title}</h4>
        </li>
    </>
}

export default CardCarousel