import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { RootState } from './root';

export const createMockStore = (initialState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
};
