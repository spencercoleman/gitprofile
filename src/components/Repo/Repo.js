const Repo = ({description, forks_count, html_url, language, name, size, stargazers_count}) => {
    return (
        <li>
            <a href={html_url} target="_blank" rel="noreferrer">
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                    <span>{stargazers_count} stars</span> {' '}
                    <span>{forks_count} forks</span> {' '}
                    <span>{size} KB</span> {' '}
                    <span>{language}</span>
                </div>
            </a>
        </li>
    );
}

export default Repo;