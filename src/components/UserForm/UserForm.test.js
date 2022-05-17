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

describe('username input', () => {
    it('calls onChange correct number of times on input', () => {
        const onChangeMock = jest.fn();
        render(
            <BrowserRouter>
                <UserForm setUsername={onChangeMock}/>
            </BrowserRouter>
        );
        const input = screen.getByRole('textbox');
        const username = 'spencercoleman';

        userEvent.type(input, username);

        expect(onChangeMock).toHaveBeenCalledTimes(username.length);
    });

    it('calls onChange with correct arguments on each input', () => {
        const onChangeMock = jest.fn();
        render(
            <BrowserRouter>
                <UserForm setUsername={onChangeMock}/>
            </BrowserRouter>
        );
        const input = screen.getByRole('textbox');
        const username = 'facebook';

        userEvent.type(input, username);

        expect(onChangeMock).toHaveBeenNthCalledWith(1, "f");
        expect(onChangeMock).toHaveBeenNthCalledWith(3, "fac");
        expect(onChangeMock).toHaveBeenNthCalledWith(8, "facebook");
    });

    it("input has correct values", () => {
        const onChangeMock = jest.fn();
        render(
            <BrowserRouter>
                <UserForm setUsername={onChangeMock}/>
            </BrowserRouter>
        );
        const input = screen.getByRole("textbox");
    
        userEvent.type(input, "foobar");
        expect(input).toHaveValue("foobar");
      });
});