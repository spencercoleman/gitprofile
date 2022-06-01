import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/http';
import { FiBriefcase, FiMapPin, FiCalendar, FiLink, FiDownloadCloud } from 'react-icons/fi';
import Header from '../Header/Header';
import Charts from '../Charts/Charts';
import UserRepos from '../UserRepos/UserRepos';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './User.css';

const User = ({isDarkTheme, setIsDarkTheme, rateRemaining, rateLimit}) => {
    const params = useParams();
    const theme = isDarkTheme ? 'dark' : 'light';
    const [isLoadingUser, fetchedUserData, userErrorData] = useFetch(`https://api.github.com/users/${params.userId}`);
    const [isLoadingRepos, fetchedRepoData, repoErrorData] = useFetch(`https://api.github.com/users/${params.userId}/repos?per_page=100`);
    
    let user = null;
    let repos = null;
    let content = <Loader theme={theme} />;

    document.title = `Hub - ${params.userId}'s profile`;

    if (!isLoadingUser && fetchedUserData && !isLoadingRepos && fetchedRepoData) {
        user = fetchedUserData;
        repos = fetchedRepoData;

        content = (
            <>
                <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
                <div className="User">
                    <div className="user-details">
                        <div className="user-profile">
                            <img className="user-avatar" src={user.avatar_url} alt={user.login}></img>
                            <h1>{user.name}</h1>
                            <a href={user.html_url} target='_blank' rel='noreferrer'>@{user.login}</a>
                        </div>
                        {user.bio && (
                            <p className={`user-bio ${theme}`}>{user.bio}</p>
                        )}
                        <ul className={`user-info ${theme}`}>
                            {user.blog && <li><FiLink /> <a href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a></li>}
                            {user.company && <li><FiBriefcase /> {user.company}</li>}
                            {user.location && <li> <FiMapPin /> {user.location}</li>}
                            <li><FiCalendar /> Created {new Date(user.created_at).toLocaleDateString()}</li>
                        </ul>
                    </div>
                    <div className="user-content">
                        <ul className="user-stats">
                            <li><h2>{user.public_repos.toLocaleString()}</h2>{user.public_repos === 1 ? 'repository' : 'repositories'}</li>
                            <li><h2>{user.public_gists.toLocaleString()}</h2> {user.public_gists === 1 ? 'gist' : 'gists'}</li>
                            <li><h2>{user.followers.toLocaleString()}</h2> {user.followers === 1 ? 'follower' : 'followers'}</li>
                            <li><h2>{user.following.toLocaleString()}</h2> following</li>
                        </ul>
                        <Charts isDarkTheme={isDarkTheme} username={user.login} repos={repos} />
                        <UserRepos theme={theme} username={user.login} repos={repos}/>
                        <div className="rate-limit">
                            {/* Two fetches are made so subtract those for better accuracy*/}
                            <FiDownloadCloud /> {rateRemaining - 2} / {rateLimit} requests remaining
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else if (!isLoadingUser && (userErrorData || repoErrorData)) {
        content = <Error type={userErrorData ? userErrorData : repoErrorData} />;
    }
    return content;
}

export default User;