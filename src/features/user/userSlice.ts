import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './userThunks';
import { UserState } from './userTypes';

const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchUser.fulfilled,
                (state, action: PayloadAction<UserState['data']>) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )
            .addCase(
                fetchUser.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.loading = false;
                    state.error = action.payload || 'Unknown error';
                }
            );
    },
});

export default userSlice.reducer;
