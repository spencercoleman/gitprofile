import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setFetchedData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            })
    }, [url]);

    return [isLoading, fetchedData];
}