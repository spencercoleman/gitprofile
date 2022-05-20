import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = ({username, setUsername}) => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value);
    }
      
    const handleSubmit = (event) => {
        event.preventDefault();

        if (username) {
            navigate(`/${username}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter your GitHub Username</label>
            <input id="username" type="text" value={username} onChange={handleChange}></input>
        </form>
    );
}

export default UserForm;
