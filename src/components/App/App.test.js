import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe('username form', () => {
    it('renders label to enter GitHub username', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByLabelText('Enter your GitHub Username')).toBeInTheDocument();
    });
    it('renders text input for username', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
       expect(screen.getByRole('textbox')).toBeInTheDocument(); 
    });
});