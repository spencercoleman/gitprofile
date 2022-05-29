import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
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

        setUsername('');
    }

    return (
        <div className="UserForm">
            <div>
                <div className="hero">
                    <h1>A better way to view your GitHub stats</h1>
                </div>
                <div className="icon">
                    <FiChevronDown />
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        id="username" 
                        className={`input-${theme}`} 
                        type="text" 
                        value={username} 
                        onChange={handleChange}
                        placeholder="Search your username" 
                        autoFocus>
                    </input>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
