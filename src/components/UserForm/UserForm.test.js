import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import UserForm from './UserForm';

describe('username form', () => {
    it('renders label to enter GitHub username', () => {
        render(
            <BrowserRouter>
                <UserForm />
            </BrowserRouter>
        );
        expect(screen.getByLabelText('Enter your GitHub Username')).toBeInTheDocument();
    });
    it('renders text input for username', () => {
        render(
            <BrowserRouter>
                <UserForm />
            </BrowserRouter>
        );
       expect(screen.getByRole('textbox')).toBeInTheDocument(); 
    });
});