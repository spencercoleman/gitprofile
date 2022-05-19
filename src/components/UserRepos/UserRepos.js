import React from 'react';
import { useFetch } from '../../hooks/http';

const UserRepos = ({repos_url}) => {
    const [isLoading, fetchedData] = useFetch(repos_url);
    console.log(fetchedData);

    if (!isLoading && fetchedData) {
        const repos = fetchedData;

        if (repos.length) {
            return (
                <div>
                    <h2>Top Repositories</h2>
                    <ul>{repos.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>
                </div>
            );
        }
    }
    else {
        return (
            <div>Loading...</div>
        );
    }
}

export default UserRepos;