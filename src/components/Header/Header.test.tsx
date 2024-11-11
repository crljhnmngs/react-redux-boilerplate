import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMockStore } from '../../store/testUtils';
import { Header } from '.';
import { toast } from 'react-toastify';

jest.mock('axios');
jest.mock('../../assets/icons/logo.png', () => 'logo-mock');
jest.mock('react-toastify', () => ({
    toast: {
        error: jest.fn(),
    },
    Bounce: jest.fn(),
}));

const renderWithStore = (store: any) => {
    return render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
};

describe('Header Component', () => {
    it('should renders user name and image when user data is available', async () => {
        const initialState = {
            user: {
                data: {
                    results: [
                        {
                            name: { first: 'John', last: 'Doe' },
                            picture: { thumbnail: 'user-thumbnail.jpg' },
                        },
                    ],
                },
                loading: false,
                error: null,
            },
        };

        const store = createMockStore(initialState);
        renderWithStore(store);

        await waitFor(async () => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
        });
        await waitFor(async () => {
            expect(screen.getByAltText('UserImage')).toHaveAttribute(
                'src',
                'user-thumbnail.jpg'
            );
        });
    });

    it('should renders logo image', async () => {
        const initialState = {
            user: {
                data: null,
                loading: false,
                error: null,
            },
        };

        const store = createMockStore(initialState);
        renderWithStore(store);

        const logoImage = screen.getByAltText('logo');
        await waitFor(async () => {
            expect(logoImage).toBeInTheDocument();
        });
        await waitFor(async () => {
            expect(logoImage).toHaveAttribute('src', 'logo-mock');
        });
    });

    it('should shows loading indicator when loading is true', async () => {
        const initialState = {
            user: {
                data: null,
                loading: true,
                error: null,
            },
        };

        const store = createMockStore(initialState);
        renderWithStore(store);

        await waitFor(async () => {
            expect(screen.getByText(/loading/i)).toBeInTheDocument();
        });
    });

    it('should calls toast.error when there is an error', async () => {
        const initialState = {
            user: {
                data: null,
                loading: false,
                error: 'Failed to load user data',
            },
        };

        const store = createMockStore(initialState);
        renderWithStore(store);

        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith(
                'Failed to load user data',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    progress: undefined,
                    transition: expect.any(Function),
                }
            );
        });
    });
});
