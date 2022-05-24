import { Link } from "react-router-dom";
import { FiGithub } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/"><FiGithub /> profile</Link> 
        </div>
    );
}

export default Header;