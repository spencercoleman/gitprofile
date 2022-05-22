import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Repo from './Repo';

describe('repo component', () => {
    const testRepo = {
        description: 'My first repo',
        forks_count: 100,
        html_url: 'https://www.github.com',
        language: 'JavaScript',
        name: 'Hello World',
        size: 1000,
        stargazers_count: 200
    }

    it('renders a list item', () => {
        render(
            <BrowserRouter>
                <Repo />
            </BrowserRouter>
        );
       expect(screen.getByRole('listitem')).toBeInTheDocument(); 
    });
    
    it('renders a heading with the repo name', () => {
        render(
            <BrowserRouter>
                <Repo name='Foobar' />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading').textContent).toBe('Foobar');
    });

    it('renders a description paragraph', () => {
        render(
            <BrowserRouter>
                <Repo description='Octocat made this' />
            </BrowserRouter>
        );
        expect(screen.getByText('Octocat made this')).toBeInTheDocument();
    });

    it('should be a link', () => {
        render(
            <BrowserRouter>
                <Repo html_url='https://google.com' />
            </BrowserRouter>
        );
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://google.com');
    });

    it('should contain the stars and fork count', () => {
        render(
            <BrowserRouter>
                <Repo forks_count={10} stargazers_count={20} />
            </BrowserRouter>
        );
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    });

    it('should correctly render with props', () => {
        render(
            <BrowserRouter>
                <Repo 
                    description={testRepo.description} 
                    forks_count={testRepo.forks_count}
                    html_url={testRepo.html_url}
                    language={testRepo.language}
                    name={testRepo.name}
                    size={testRepo.size} 
                    stargazers_count={testRepo.stargazers_count} 
                />
            </BrowserRouter>
        );
        expect(screen.getByRole('heading').textContent).toBe(testRepo.name);
        expect(screen.getByText(testRepo.description)).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', testRepo.html_url);
        expect(screen.getByText(testRepo.language)).toBeInTheDocument();
    });
});