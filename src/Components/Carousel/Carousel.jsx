import { useEffect, useState } from 'react';
import useFetchMovies from '../../Hooks/useFetchMovies';
import CardCarousel from './../CardCarousel/CardCarousel.jsx';

const items = [
    {
        backdrop_path:"https://placehold.co/600x400",
        title:'01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
        backdrop_path:"https://placehold.co/600x400",
        title:'02. Sed do eiusmod tempor incididunt ut labore.'
    },{
        backdrop_path:"https://placehold.co/600x400",
        title:'03. Consectetur adipiscing elit.'
    },{
        backdrop_path:"https://placehold.co/600x400",
        title:'04. Ut enim ad minim veniam, quis nostrud exercitation.'
    },{
        backdrop_path:"https://placehold.co/600x400",
        title:'05. Llamco nisi ut aliquip ex ea commodo consequat.'
    },{
        backdrop_path:"https://placehold.co/600x400",
        title:'06. Misi ut aliquip ex ea commodo consequat.'
    }
];

function Carousel(props) {

    const url = "https://api.themoviedb.org/3/movie/now_playing?language=it-IT&api_key=45889e342ed076bf952461d661d468d8";
    const { data } = useFetchMovies(url, null);

    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);
    
    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])
    
    const handleAnimationEnd = () => {
        if(moveClass === 'prev'){
        shiftNext([...carouselItems]);
        }else if(moveClass === 'next'){
        shiftPrev([...carouselItems]);
        }
        setMoveClass('')
    }
    
    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }
    
    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }

    return <>
        <div className="carouselwrapper module-wrapper bg-dark">
            <div className='container'>
                <h2>{props.title}</h2>
            </div>
            <div className="ui">
                <button onClick={() => setMoveClass('next')} className="prev">
                <span className="material-icons">chevron_left</span>
                </button>
                <button onClick={() => setMoveClass('prev')} className="next">
                <span className="material-icons">chevron_right</span>
                </button>
            </div>
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                {carouselItems && carouselItems.map((t, index) => (
                    <CardCarousel key={index} img={t.backdrop_path} title={t.title} />
                )
                )}
            </ul>
        </div>
    </>
}

export default Carousel