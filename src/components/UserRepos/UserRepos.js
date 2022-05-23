import React from 'react';
import { useFetch } from '../../hooks/http';
import Loader from '../Loader/Loader';
import Repo from '../Repo/Repo';
import './UserRepos.css';

const UserRepos = ({repos_url}) => {
    const [isLoading, fetchedData] = useFetch(repos_url);

    let repos = null;
    let content = <Loader />;

    if (!isLoading && fetchedData) {
        repos = fetchedData;

        if (repos.length > 0) {
            content =  (
                <div className="UserRepos">
                    <h2>Top Repositories</h2>
                    <hr></hr>
                    <ul className="repo-list">{repos.map(repo => (
                        <Repo 
                            key={repo.id} 
                            description={repo.description} 
                            forks_count={repo.forks_count}
                            html_url={repo.html_url} 
                            language={repo.language}
                            name={repo.name}
                            size={repo.size}
                            stargazers_count={repo.stargazers_count}
                        />
                        ))}
                    </ul>
                </div>
            );
        }
    }
    return content;
}

export default UserRepos;