import { Link } from "react-router-dom";
import { FiGithub, FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';

const Header = ({isDarkTheme, setIsDarkTheme}) => {
    const theme = isDarkTheme ? 'dark' : 'light';
    
    const handleClick = () => {
        const newTheme = (theme === 'dark') ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.add(newTheme);
        document.body.classList.remove(theme);
    }

    return (
        <div className={`Header ${theme}`}>
            <Link to="/"><FiGithub /></Link>
            <div className="theme-swap" onClick={handleClick}>
                {isDarkTheme ? <FiSun /> : <FiMoon/>}
            </div>
        </div>
    );
}

export default Header;