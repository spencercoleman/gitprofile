import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);
    const [errorData, setErrorData] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(data => {
                setFetchedData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setErrorData(err.message);
                setIsLoading(false);
            })
    }, [url]);

    return [isLoading, fetchedData, errorData];
}