import { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
    const [favourite, setFavourite] = useState(false);
    const [moviesWishList, setmoviesWishList] = useState([]);

    const handleFavourite = (el) => {
        // setFavourite( fav => !fav );
        setmoviesWishList([moviesWishList, el])
        // console.log(el)
    }

    return (
        <Context.Provider value={{ moviesWishList, favourite, handleFavourite }}>
            { props.children }
        </Context.Provider>
    )
}