import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({type}) => {
    let message = 'Something went wrong.';
    let action = <Link to="/">Try Again</Link>; 

    if (type === '403') {
        message = 'Oops! You hit the rate limit.';
        action = <p style={{margin: 0, padding: '0 1rem'}}>Try again later.</p>;
    }
    else if (type === '404') {
        message = 'Couldn\'t find that user.';
    }

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