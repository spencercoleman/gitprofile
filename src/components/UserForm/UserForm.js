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

    document.title = "Hub";

    return (
        <div className="UserForm">
            <h1>A better way to view your GitHub stats.</h1>
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
    );
}

export default UserForm;
