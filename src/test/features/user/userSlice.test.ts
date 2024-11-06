import userReducer from '../../../features/user/userSlice';
import { fetchUser } from '../../../features/user/userThunks';
import { UserState } from '../../../features/user/userTypes';

describe('userSlice', () => {
    const initialState: UserState = {
        data: null,
        loading: false,
        error: null,
    };

    it('should return the initial state', () => {
        const result = userReducer(undefined, { type: 'init' });
        expect(result).toEqual(initialState);
    });

    it('should handle fetchUser.pending', () => {
        const action = { type: fetchUser.pending.type };
        const state = userReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
    });

    it('should handle fetchUser.fulfilled', () => {
        const userData = {
            results: [
                {
                    name: { first: 'John', last: 'Doe' },
                    picture: { thumbnail: 'john.jpg' },
                },
            ],
        };
        const action = { type: fetchUser.fulfilled.type, payload: userData };
        const state = userReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.data).toEqual(userData);
        expect(state.error).toBeNull();
    });

    it('should handle fetchUser.rejected', () => {
        const errorMessage = 'Failed to fetch user';
        const action = { type: fetchUser.rejected.type, payload: errorMessage };
        const state = userReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe(errorMessage);
    });

    it('should handle fetchUser.rejected with undefined error', () => {
        const action = { type: fetchUser.rejected.type, payload: undefined };
        const state = userReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe('Unknown error');
    });
});
