import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/http';
import Error from '../Error/Error';

const User = () => {
    const params = useParams();
    const [isLoading, fetchedData] = useFetch('https://api.github.com/users/' + params.userId);

    if (!isLoading && fetchedData) {
        return (
            <div>{fetchedData.login}</div>
        )
    }
    else if (!isLoading && !fetchedData) {
        return <Error />;
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default User;