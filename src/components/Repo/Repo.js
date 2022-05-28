import React from 'react';
import { FiFolder, FiStar, FiGitPullRequest } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';
import { colors } from '../../utils/gitHubColors';
import './Repo.css';

class Repo extends React.Component {
    constructor(props) {
        super(props);
        this.getColor = this.getColor.bind(this);
    }
    
    getColor(language) {
        return colors[language].color ? colors[language].color : '#bbb';
    }

    render() {
        const {theme, description, forks_count, html_url, language, name, size, stargazers_count} = this.props;
        
        return (
            <li className={`Repo ${theme}`}>
                <a href={html_url} target="_blank" rel="noreferrer">
                    <div className="repo-name"><FiFolder /> <h3>{name}</h3></div>
                    <p>{description}</p>
                    <div className="repo-stats-container">
                        <ul className="repo-stats">
                            <li><FiStar /> {stargazers_count.toLocaleString()}</li> {' '}
                            <li><FiGitPullRequest /> {forks_count.toLocaleString()}</li> {' '}
                            <li>{size.toLocaleString()} KB</li> {' '}
                        </ul>
                        {language && <span className="repo-language"><BsFillCircleFill  color={this.getColor(language)} /> {language}</span>}
                    </div>
                </a>
            </li>
        );
    }
}

export default Repo;