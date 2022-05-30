import React, {useState} from 'react';
import FlipMove from 'react-flip-move';
import Repo from '../Repo/Repo';
import './UserRepos.css';

const UserRepos = ({theme, username, repos}) => {
    const [sortCriteria, setSortCriteria] = useState('stargazers_count');

    const handleChange = (event) => {
        setSortCriteria(event.target.value);
    }

    const sortRepos = (repos) => {
        const sorted = repos.sort((a, b) => {
            return b[sortCriteria] - a[sortCriteria];
        });
        return sorted;
    }

    return (
        <div className={`UserRepos ${theme}`}>
            <div className={`repo-header ${theme}`}>
                <h2>Top Repositories</h2>
                <select 
                    className={theme} 
                    value={sortCriteria} 
                    onChange={handleChange} 
                    style={{border: `1px solid var(--${theme}-border-color)`}}>
                    <option value="stargazers_count">Stars</option>
                    <option value="forks_count">Forks</option>
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