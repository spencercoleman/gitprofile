import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({type}) => {
    let message = 'Something went wrong.';
    let action = <Link to="/">Try Again</Link>; 

    if (type === '403') {
        message = 'Oops! You hit the rate limit.';
        action = <Link to="/">Try Again Later</Link>;
    }
    else if (type === '404') {
        message = 'Couldn\'t find that user.';
    }

    document.title = `Hub - ${message.slice(0, message.length - 1)}`

    return (
        <div className="Error">
            <h1>{message}</h1>
            <div className='icon'>
                <FiChevronDown />
            </div>
            {action}
        </div>
    )
}

export default Error;