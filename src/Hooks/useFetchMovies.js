import { useEffect, useState } from "react";

const useFetchMovies = (url, defaultData) => {

    const [data, setData] = useState(defaultData);

    // useEffect se cambia l'url
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(datas => setData(datas))
        .catch(err => console.log(err))
    }, [url]);

    return {data, setData};
};

export default useFetchMovies