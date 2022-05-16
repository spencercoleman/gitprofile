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
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch(err => {
                setIsLoading(false);
                console.error(err);
            })
    }, []);

    return [isLoading, fetchedData];
}