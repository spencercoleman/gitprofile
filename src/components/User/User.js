import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/http';
import Error from '../Error/Error';

const User = () => {
    const params = useParams();
    const [isLoading, fetchedData] = useFetch('https://api.github.com/users/' + params.userId);

    if (!isLoading && fetchedData) {
        const user = fetchedData;
        console.log(fetchedData);

        return (
            <div>
                <img src={user.avatar_url} alt={user.login}></img>
                <h1>{user.name}</h1>
                <h2><a href={user.html_url} target='_blank' rel='noreferrer'>@{user.login}</a></h2>
                {user.blog && <div>{user.blog}</div>}
                <ul>
                    {user.company && <li>{user.company}</li>}
                    {user.location && <li>{user.location}</li>}
                    <li>{user.created_at}</li>
                </ul>

                {user.bio && <div>{user.bio}</div>}
                <ul>
                    <li>{user.public_repos} {user.public_repos === 1 ? 'repository' : 'repositories'}</li>
                    <li>{user.public_gists} {user.public_gists === 1 ? 'gist' : 'gists'}</li>
                </ul>
                <ul>
                    <li>{user.followers} {user.followers === 1 ? 'follower' : 'followers'}</li>
                    <li>{user.following} following</li>
                </ul>
            </div>
        )
    }
    else if (!isLoading && !fetchedData) {
        return <Error />;
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default User;