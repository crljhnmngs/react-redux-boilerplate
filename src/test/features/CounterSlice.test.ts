import reducer, {
    increment,
    decrement,
    reset,
} from '../../features/counter/counterSlice';

test('should increases the count', () => {
    const initialState = { value: 0 };
    const newState = reducer(initialState, increment());
    expect(newState.value).toBe(1);
});

test('should decreases the count', () => {
    const initialState = { value: 1 };
    const newState = reducer(initialState, decrement());
    expect(newState.value).toBe(0);
});

test('should reset the count to 0', () => {
    const initialState = { value: 5 };
    const newState = reducer(initialState, reset());
    expect(newState.value).toBe(0);
});
