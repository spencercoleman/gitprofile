import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>Oops! That username could not be found!</h1>
            <Link to="/">Try Again</Link>
        </div>
    )
}

export default Error;