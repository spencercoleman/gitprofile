import React from 'react';
import { FiFolder, FiStar, FiGitPullRequest } from 'react-icons/fi';
import './Repo.css';

const Repo = ({description, forks_count, html_url, language, name, size, stargazers_count}) => {
    return (
        <li className="Repo">
            <a href={html_url} target="_blank" rel="noreferrer">
                <div className="repo-name"><FiFolder /> <h3>{name}</h3></div>
                <p>{description}</p>
                <div className="repo-stats-container">
                    <ul className="repo-stats">
                        <li><FiStar /> {stargazers_count}</li> {' '}
                        <li><FiGitPullRequest /> {forks_count}</li> {' '}
                        <li>{size} KB</li> {' '}
                    </ul>
                    <span>{language}</span>
                </div>
            </a>
        </li>
    );
}

export default Repo;