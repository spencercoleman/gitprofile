import styled from "styled-components/macro";

const StyledUser = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .user-avatar {
        border-radius: 50%;
        max-width: 160px; 
        margin: 0 auto;
    }

    .user-profile {
        padding: 1rem;
        text-align: center;
    }

    .user-bio {
        border-top: 1px solid;
        border-color: inherit;
        padding: 1rem;
        margin: 0;
    }

    .user-details {
        display: flex;
        flex-direction: column;
    }

    .user-info {
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: inherit;
        list-style-image: none;
        padding: 1rem;
        margin: 0;
    }

    .user-info li {
        display: flex;
        align-items: center;

        svg {
            margin-right: 0.7rem;
        }
    }
    
    .user-stats {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(135px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .rate-limit {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin-top: 2rem;

        svg {
            margin-right: 0.5rem;
        }
    }

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding-bottom: 1rem;;

        .user-avatar {
            max-width: 260px;
        }

        .user-bio, .user-info, .user-stats{
            padding: 1rem 0;
        }
        
        .user-details, .user-content {
            margin-right: 1rem;
            margin-left: 1rem;
        }
    }
`;

export default StyledUser;