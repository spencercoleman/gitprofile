import styled from 'styled-components/macro';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const StyledError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    padding: 0 1rem;
    padding-bottom: 125px;

    h1 {
        font-size: 2rem;
        line-height: 2.5rem;
        margin: 1rem 0;
    }

    a {
        font-size: 1.25rem;
        text-decoration: underline;
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

        a {
            text-decoration: none;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const Error = ({type}) => {
    let message = 'Something went wrong...';
    let action = <Link to="/">Try Again</Link>; 

    if (type === '403') {
        message = 'Oops! You hit the rate limit...';
        action = <Link to="/">Try Again Later</Link>;
    }
    else if (type === '404') {
        message = 'Couldn\'t find that user...';
    }

    document.title = `Hub - ${message}`

    return (
        <StyledError>
            <h1>{message}</h1>
            <div className='icon'>
                <FiChevronDown />
            </div>
            {action}
        </StyledError>
    )
}

export default Error;