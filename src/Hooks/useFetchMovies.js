import { useEffect, useState } from "react";

const useFetchMovies = (url, defaultData) => {
    const [data, setData] = useState(defaultData);
    const [loading,setLoading] = useState(false);

    // useEffect se cambia l'url
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(
                url
            );
            const { results } = await res.json();
            setData(results);
            setLoading(false);
        };

        fetchData();
    }, [url])

    return { data, loading };
};

export default useFetchMovies;
