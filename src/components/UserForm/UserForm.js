import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = ({isDarkTheme, username, setUsername}) => {
    const navigate = useNavigate();
    const theme = isDarkTheme ? 'dark' : 'light';

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
        <div className="UserForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your GitHub username</label>
                <input id="username" className={`input-${theme}`} type="text" value={username} onChange={handleChange} autoFocus></input>
            </form>
        </div>
    );
}

export default UserForm;
