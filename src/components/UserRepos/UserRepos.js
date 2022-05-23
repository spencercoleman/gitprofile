import React, {useState} from 'react';
import { useFetch } from '../../hooks/http';
import FlipMove from 'react-flip-move';
import Loader from '../Loader/Loader';
import Repo from '../Repo/Repo';
import './UserRepos.css';

const UserRepos = ({repos_url}) => {
    const [sort, setSort] = useState('stars');
    const [isLoading, fetchedData] = useFetch(repos_url);

    let repos = null;
    let content = <Loader />;

    const handleChange = (event) => {
        setSort(event.target.value);
    }

    const sortRepos = (repos) => {
        const sorted = repos.sort((a, b) => {
            if (sort === 'forks') {
                return b.forks_count - a.forks_count;
            }
            else if (sort === 'size') {
                return b.size - a.size;
            }
            return b.stargazers_count - a.stargazers_count;
        });
        return sorted;
    }

    if (!isLoading && fetchedData) {
        repos = fetchedData;

        if (repos.length > 0) {
            const sorted = sortRepos(repos);
            content =  (
                <div className="UserRepos">
                    <div className="header">
                        <h2>Top Repositories</h2>
                        <select value={sort} onChange={handleChange}>
                            <option value="stars">Stars</option>
                            <option value="forks">Forks</option>
                            <option value="size">Size</option>
                        </select>
                    </div>
                    <hr></hr>
                    <FlipMove typeName="ul" className="repo-list">
                    {sorted
                        .slice(0, 10)
                        .map(repo => (
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
                    </FlipMove>
                </div>
            );
        }
    }
    return content;
}

export default UserRepos;