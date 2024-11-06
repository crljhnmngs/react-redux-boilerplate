import store, { RootState } from '../../store/root';
import { increment } from '../../features/counter/counterSlice';

describe('store', () => {
    it('should create the store with the correct initial state', () => {
        const state: RootState = store.getState();

        expect(state.counter.value).toBe(0);
    });

    it('should handle actions and update the state', () => {
        store.dispatch(increment());

        const state: RootState = store.getState();
        expect(state.counter.value).toBe(1);
    });

    it('should return the correct state after multiple dispatches', () => {
        store.dispatch(increment());
        store.dispatch(increment());
        store.dispatch(increment());

        const state: RootState = store.getState();
        expect(state.counter.value).toBe(4);
    });
});
