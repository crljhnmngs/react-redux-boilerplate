import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../api/apiClient';
import { UserDataResponse } from './userTypes';

export const fetchUser = createAsyncThunk<
    UserDataResponse,
    void,
    { rejectValue: string }
>('user/fetchUser', async (_, { rejectWithValue }) => {
    try {
        return await apiRequest<UserDataResponse>(
            'https://randomuser.me/api/',
            'GET'
        );
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'An error occurred'
        );
    }
});
