import styled from "styled-components/macro";

const StyledCharts = styled.div`
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: inherit;

    .chart-container {
        height: 300px;
        width: 300px;
        display: flex;
        justify-content: center;
        margin: 0;

        p {
            padding: 2rem 0;
            margin: 0;
        }
    }

    .react-tabs__tab-list {
        font-size: 1.15rem;
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        border-color: inherit;
    }

    .react-tabs__tab--selected {
        background-color: transparent !important;
        color: inherit;
        text-decoration: underline;
    }

    .react-tabs__tab {
        padding: 1rem;
        bottom: 0;
        width: 50%;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        border: none;

        &:nth-child(2) {
            border-left: 1px solid;
            border-color: inherit;
        }

        &:focus:after {
            display: none;
        }
    }

    .react-tabs__tab-panel {
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px) {
        .react-tabs__tab-list {
            font-size: 1.5rem;
            justify-content: flex-start;
        }

        .react-tabs__tab-panel {
            padding: 0 1rem;
            display: block !important;
        }

        .chart-container {
            height: 400px;
            width: 400px;
            margin: 0 auto;
        }
    }

    @media (min-width: 992px) {
        border: 1px solid;
        border-color: inherit;
        border-radius: 0.25rem;

        .chart-container {
            height: 450px;
            width: 450px;
        }

        .react-tabs__tab {
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export default StyledCharts;