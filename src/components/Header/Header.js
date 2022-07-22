import { Link } from "react-router-dom";
import { FiGithub, FiSun, FiMoon } from 'react-icons/fi';
import styled from "styled-components/macro";

const StyledHeader = styled.header`
    padding: 1.2rem;
    border-bottom: 1px solid;
    border-color: inherit;
    background-color: var(--${props => props.theme}-background-color);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    a {
        margin-right: auto;
        display: flex;
        align-items: center;
    }

    svg {
        margin-right: 0.5rem;
    }

    .theme-swap {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .theme-swap:hover {
        cursor: pointer;
    }
`;

const Header = ({isDarkTheme, setIsDarkTheme}) => {
    const theme = isDarkTheme ? 'dark' : 'light';
    
    const handleClick = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <StyledHeader theme={theme}>
            <Link to="/" aria-label="Home Link">
                <FiGithub name="Home" />
            </Link>
            <div className="theme-swap" onClick={handleClick}>
                {isDarkTheme ? <FiSun /> : <FiMoon/>}
            </div>
        </StyledHeader>
    );
}

export default Header;