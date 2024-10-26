import { combineReducers } from 'redux';
import userReducer from '../features/user/userSlice';
import counterReducer from '../features/counter/counterSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,
});
