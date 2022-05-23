import React from 'react';
import './Repo.css';

const Repo = ({description, forks_count, html_url, language, name, size, stargazers_count}) => {
    return (
        <li className="Repo">
            <a href={html_url} target="_blank" rel="noreferrer">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="repo-stats-container">
                    <ul className="repo-stats">
                        <li>{stargazers_count}</li> {' '}
                        <li>{forks_count}</li> {' '}
                        <li>{size} KB</li> {' '}
                    </ul>
                    <span>{language}</span>
                </div>
            </a>
        </li>
    );
}

export default Repo;