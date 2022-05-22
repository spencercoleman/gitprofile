import React from 'react';
import { useFetch } from '../../hooks/http';
import Loader from '../Loader/Loader';

const UserRepos = ({repos_url}) => {
    const [isLoading, fetchedData] = useFetch(repos_url);
    console.log(fetchedData);

    let repos = null;
    let content = <Loader />;

    if (!isLoading && fetchedData) {
        repos = fetchedData;

        if (repos.length > 0) {
            content =  (
                <div>
                    <h2>Top Repositories</h2>
                    <ul>{repos.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>
                </div>
            );
        }
    }
    return content;
}

export default UserRepos;