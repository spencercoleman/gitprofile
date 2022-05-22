import React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { mockUserData } from '../../utils/mockUserData';
import * as hooks from '../../hooks/http';
import User from './User';

describe('user details', () => {
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => jest.fn(() => ({userId: 'octocat'}))
    }));

    beforeEach(() => {
        // Return false for isLoading and populate with the mockUserData
        jest.spyOn(hooks, 'useFetch').mockImplementation(() => ([false, mockUserData]));
    });

    it('fetches user data on render', () => {
        render(
            <MemoryRouter>
                <User />
            </MemoryRouter>
        );
        // Will be called once for the user and once for the repositories
        expect(hooks.useFetch).toHaveBeenCalledTimes(2);
    });
    
    it('renders an image for the user avatar', () => {
        render(
            <MemoryRouter>
                <User />
            </MemoryRouter>
        );
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders the name and username', () => {
        render(
            <MemoryRouter>
                <User />
            </MemoryRouter>
        );
        expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
        expect(screen.getByText(`@${mockUserData.login}`)).toBeInTheDocument();
    });

    it('does not render biography paragraph when user has no bio', () => {
        render(
            <MemoryRouter>
                <User />
            </MemoryRouter>
        );
        expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
    });
});