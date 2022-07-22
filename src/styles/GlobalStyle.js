import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    :root {
        /* Dark Theme */
        --dark-background-color: #1a1b26;
        --dark-font-color: #c0caf5;
        --dark-border-color: #565f89;
        
        /* Light Theme */
        --light-background-color: #dcdde4;
        --light-font-color: #0f0f14;
        --light-border-color: #9699a3;

        --font-barlow: 'Barlow', sans-serif;
    }

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
        color: var(--${props => props.theme}-font-color);
        border-color: var(--${props => props.theme}-border-color);
        font-family: var(--font-barlow);
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: inherit;
        font-size: 1.125rem;
        line-height: 1.75rem;
        background-color: var(--${props => props.theme}-background-color);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 400;

        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        margin: 0;
    }

    a, button {
        transition: all 0.3s ease;
        color: inherit;
    }

    a {
        text-decoration: none;

        &:hover, &:focus {
            text-decoration: underline;
        }
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    main {
        position: relative;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    select {
        background-color: inherit;
    }

    option {
        background-color: var(--${props => props.theme}-background-color);
    }
`;

export default GlobalStyle;