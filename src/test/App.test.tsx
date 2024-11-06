import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../components/Header', () => ({
    Header: () => <div>Header Component</div>,
}));

jest.mock('../components/Counter', () => ({
    Counter: () => <div>Counter Component</div>,
}));

jest.mock('react-toastify', () => ({
    ToastContainer: () => <div>ToastContainer Component</div>,
}));

describe('App Component', () => {
    it('should render Header component', () => {
        render(<App />);
        expect(screen.getByText('Header Component')).toBeInTheDocument();
    });

    it('should render Counter component', () => {
        render(<App />);
        expect(screen.getByText('Counter Component')).toBeInTheDocument();
    });

    it('should render ToastContainer component', () => {
        render(<App />);
        expect(
            screen.getByText('ToastContainer Component')
        ).toBeInTheDocument();
    });

    it('should have a full-screen container', () => {
        render(<App />);
        expect(screen.getByRole('main')).toHaveClass('h-screen w-screen');
    });
});
