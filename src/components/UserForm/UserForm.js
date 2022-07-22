import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components/macro';

const StyledForm = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    padding: 0 1rem;
    padding-bottom: 125px;

    input {
        font-size: 1.125rem;
        line-height: 1.75rem;
        text-align: center;
        height: 2rem;
        border-radius: 0.25rem;
        border: 1px solid;
        border-color: inherit;
        background-color: transparent;
        padding: 1.25rem 0.5rem;

        &::placeholder {
            color: inherit;
        }
    }

    input:focus {
        outline: none;
    }

    h1 {
        font-size: 2rem;
        line-height: 2.5rem;
        margin: 1rem 0;
    }

    .icon {
        font-size: 2rem;
        margin: 2rem;
    }

    @media (min-width: 992px) {
        h1 {
            font-size: 2.5rem;
            margin: 2rem;
        }
    }
`;

const UserForm = ({ username, setUsername}) => {
    const navigate = useNavigate();

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
        <StyledForm>
            <h1>A better way to view your GitHub stats</h1>
            <div className="icon">
                <FiChevronDown />
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    id="username" 
                    type="text" 
                    value={username} 
                    onChange={handleChange}
                    placeholder="Search your username" 
                    autoFocus>
                </input>
            </form>
        </StyledForm>
    );
}

export default UserForm;
