import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

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
        <div id="UserForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your GitHub username</label>
                <input id="username" type="text" value={username} onChange={handleChange} autoFocus></input>
            </form>
        </div>
    );
}

export default UserForm;
