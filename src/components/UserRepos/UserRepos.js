import React, {useState} from 'react';
import FlipMove from 'react-flip-move';
import StyledRepos from '../../styles/StyledRepos';
import Repo from '../Repo/Repo';

const UserRepos = ({ username, repos }) => {
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
        <StyledRepos>
            <div className='repo-header'>
                <h2>Top Repositories</h2>
                <select value={sortCriteria} onChange={handleChange} >
                    <option value="stargazers_count">Stars</option>
                    <option value="forks_count">Forks</option>
                    <option value="size">Size</option>
                </select>
            </div>

            {repos.length ? (
                <FlipMove typeName="ul" className="repo-list">
                    {sortRepos(repos)
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
                </FlipMove>) : (
                <p className="empty">
                    {username} doesn't have any public repositories.
                </p>)}
        </StyledRepos>
    );
}

export default UserRepos;