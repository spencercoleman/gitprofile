import React from 'react';
import { FiFolder, FiStar, FiGitPullRequest } from 'react-icons/fi';
import './Repo.css';

class Repo extends React.Component {
    render() {
        const {description, forks_count, html_url, language, name, size, stargazers_count} = this.props;
        
        return (
            <li className="Repo" style={{ backgroundColor: '#fff' }}>
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
}

export default Repo;