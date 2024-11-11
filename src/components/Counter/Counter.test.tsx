import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Counter } from '.';
import counterReducer from '../../features/counter/counterSlice';

const renderWithStore = (store: any) => {
    return render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

describe('Counter component', () => {
    let store: any;

    beforeEach(() => {
        store = configureStore({ reducer: { counter: counterReducer } });
    });

    it('should render with initial count', () => {
        renderWithStore(store);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    it('should increment the count', () => {
        renderWithStore(store);
        const addButton = screen.getByText(/Add/i);

        fireEvent.click(addButton);
        expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
    });

    it('should decrement the count', () => {
        store.dispatch({ type: 'counter/increment' });
        renderWithStore(store);

        const subtractButton = screen.getByText(/Subtract/i);
        fireEvent.click(subtractButton);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    it('should not decrement below 0', () => {
        renderWithStore(store);

        const subtractButton = screen.getByText(/Subtract/i);
        fireEvent.click(subtractButton);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    it('should reset the count', () => {
        store.dispatch({ type: 'counter/increment' });
        renderWithStore(store);

        const resetButton = screen.getByText(/Reset/i);
        fireEvent.click(resetButton);
        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
    });

    it('should disable buttons correctly when count is 0', () => {
        renderWithStore(store);

        const subtractButton = screen.getByText(/Subtract/i);
        const resetButton = screen.getByText(/Reset/i);

        expect(subtractButton).toBeDisabled();
        expect(resetButton).toBeDisabled();
    });

    it('should enable buttons when count is above 0', () => {
        store.dispatch({ type: 'counter/increment' });
        renderWithStore(store);

        const subtractButton = screen.getByText(/Subtract/i);
        const resetButton = screen.getByText(/Reset/i);

        expect(subtractButton).toBeEnabled();
        expect(resetButton).toBeEnabled();
    });
});
