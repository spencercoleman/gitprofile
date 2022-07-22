import styled from "styled-components/macro";

const StyledRepos = styled.section`
    .repo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    .repo-header select {
        font-size: 1rem;
        line-height: 1.75rem;
        border-radius: 0.25rem;
        width: 100px;
        padding: 2px;
    }

    .repo-header select:focus {
        outline: none;
    }

    .repo-list {
        display: grid;
    }

    .empty {
        text-align: center;
        padding: 2rem 1rem;
        border-bottom: 1px solid;
        border-top: 1px solid;
        border-color: inherit;
    }

    @media (min-width: 992px) {
        .repo-header {
            padding: 1rem 0;
        }
        
        .repo-list {
            grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
            gap: 1rem;
        }
    }
`;

export default StyledRepos;