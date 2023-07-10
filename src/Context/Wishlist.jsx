import { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
    const [moviesWishList, setmoviesWishList] = useState([]);

    const handleFavourite = (el) => {
        if (el.fav) {
            el.fav = false;
            setmoviesWishList( data => data.filter( m => m.id !== el.id ) );
        } else {
            el.fav = true;
            setmoviesWishList( [...moviesWishList, el] );
        }
    }

    return (
        <Context.Provider value={{ moviesWishList, handleFavourite }}>
            { props.children }
        </Context.Provider>
    )
}