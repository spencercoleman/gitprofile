import React, {useState} from 'react';
import FlipMove from 'react-flip-move';
import Repo from '../Repo/Repo';
import './UserRepos.css';

const UserRepos = ({theme, username, repos}) => {
    const [sort, setSort] = useState('stars');

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

    return (
        <div className={`UserRepos ${theme}`}>
            <div className={`repo-header ${theme}`}>
                <h2>Top Repositories</h2>
                <select 
                    className={theme} 
                    value={sort} 
                    onChange={handleChange} 
                    style={{border: `1px solid var(--${theme}-border-color)`}}>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="size">Size</option>
                </select>
            </div>
            {repos.length ? 
                <FlipMove typeName="ul" className="repo-list">
                    {sortRepos(repos)
                        .slice(0, 10)
                        .map(repo => (
                        <Repo 
                            key={repo.id}
                            theme={theme} 
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
            : 
            <p style={{
                textAlign: 'center', 
                padding: '1rem 1rem 2rem 1rem', 
                margin: 0,
                borderBottom: `1px solid var(--${theme}-border-color)`}}>
                    {username} doesn't have any public repositories.
            </p>}
        </div>
    );
}

export default UserRepos;