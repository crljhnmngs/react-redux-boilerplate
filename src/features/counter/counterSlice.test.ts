import reducer, { increment, decrement, reset } from './counterSlice';

describe('counterSlice', () => {
    it('should increase the count', () => {
        const initialState = { value: 0 };
        const newState = reducer(initialState, increment());
        expect(newState.value).toBe(1);
    });

    it('should decrease the count', () => {
        const initialState = { value: 1 };
        const newState = reducer(initialState, decrement());
        expect(newState.value).toBe(0);
    });

    it('should reset the count to 0', () => {
        const initialState = { value: 5 };
        const newState = reducer(initialState, reset());
        expect(newState.value).toBe(0);
    });
});
