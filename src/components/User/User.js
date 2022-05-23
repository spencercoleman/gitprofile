import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/http';
import { FiBriefcase, FiMapPin, FiCalendar, FiLink } from 'react-icons/fi';
import UserRepos from '../UserRepos/UserRepos';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './User.css';

const User = () => {
    const params = useParams();
    const [isLoading, fetchedData] = useFetch('https://api.github.com/users/' + params.userId);
    
    let user = null;
    let content = <Loader />;

    if (!isLoading && fetchedData) {
        user = fetchedData;
        content = (
            <div className="User">
                <div className="details">
                    <img className="avatar" src={user.avatar_url} alt={user.login}></img>
                    <h1>{user.name}</h1>
                    <a href={user.html_url} target='_blank' rel='noreferrer'>@{user.login}</a>
                    {user.bio && (
                        <div>
                            <hr></hr>
                            <p>{user.bio}</p>
                        </div>
                    )}
                    <hr></hr>
                    <ul>
                        {user.blog && <li><FiLink /> <a href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a></li>}
                        {user.company && <li><FiBriefcase /> {user.company}</li>}
                        {user.location && <li> <FiMapPin /> {user.location}</li>}
                        <li><FiCalendar /> {new Date(user.created_at).toLocaleDateString()}</li>
                    </ul>
                </div>
                <div className="content">
                    <div className="stats">
                        <ul className="counts">
                            <li><h2>{user.public_repos}</h2>{user.public_repos === 1 ? 'repository' : 'repositories'}</li>
                            <li><h2>{user.public_gists}</h2> {user.public_gists === 1 ? 'gist' : 'gists'}</li>
                            <li><h2>{user.followers}</h2> {user.followers === 1 ? 'follower' : 'followers'}</li>
                            <li><h2>{user.following}</h2> following</li>
                        </ul>
                    </div>
                    <div>
                        <UserRepos repos_url={user.repos_url}/>
                    </div>
                </div>
            </div>
        );
    }
    else if (!isLoading && !user) {
        content = <Error />;
    }
    return content;
}

export default User;