import styled from "styled-components/macro";

const StyledRepo = styled.li`
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: inherit;
    min-height: 200px;
    padding: 1rem;

    a {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    a:hover, a:active, a:visited, a:focus {
        text-decoration: none;
    }

    p {
        flex-grow: 1;
        margin: 0.5rem 0 1rem 0;
        font-size: 1.1rem;
    }

    h3 {
        text-decoration: underline;
    }

    .repo-name {
        display: flex;
        align-items: center;

        svg {
            margin-right: 0.7rem;
        }
    }

    .repo-stats-container {
        display: flex;
        font-size: 0.9rem;
        flex-wrap: wrap;
        gap: 0.25rem;
    }

    .repo-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-right: auto;
        list-style: none;
        padding: 0;
    }

    .repo-stats li {
        display: flex;
        align-items: center;
        margin-right: 1.5rem;
    }

    .repo-language {
        display: flex;
        align-items: center;
    }

    .repo-stats svg, .repo-language svg {
        margin-right: 0.5rem;
    }

    @media (min-width: 600px) {
        h3 {
            font-size: 1.25rem;
        }
    }

    @media (min-width: 992px) {
        border: 1px solid;
        border-color: inherit;
        border-radius: 0.25rem;
        margin-top: 0;

        h3 {
            text-decoration: none;
        }

        &:hover {
            h3 {
                text-decoration: underline;
            }
        }

    }
`;

export default StyledRepo;