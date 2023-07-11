import { useEffect, useState } from "react";

const useFetchGenres = (url, defaultData) => {
    const [data, setData] = useState(defaultData);
    const [loading,setLoading] = useState(false);

    // useEffect se cambia l'url
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(
                url
            );
            const { genres } = await res.json();
            setData(genres);
            setLoading(false);
        };

        fetchData();
    }, [url])

    return { data, loading };
};

export default useFetchGenres;
