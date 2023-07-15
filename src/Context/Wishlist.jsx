import { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
    const [moviesWishList, setmoviesWishList] = useState([]);
    const isFav = (movie_id) => (moviesWishList.filter( m => movie_id === m.id)).length > 0;

    const handleFavourite = (el) => {
        if (isFav(el.id)) {
            el.fav = false;
            setmoviesWishList( data => data.filter( m => m.id !== el.id ) );
        } else {
            el.fav = true;
            setmoviesWishList( [...moviesWishList, el] );
        }
    }

    return (
        <Context.Provider value={{ moviesWishList, setmoviesWishList, handleFavourite, isFav }}>
            { props.children }
        </Context.Provider>
    )
}