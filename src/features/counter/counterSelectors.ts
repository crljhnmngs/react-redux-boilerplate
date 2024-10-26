import { RootState } from '../../store/root';

export const selectCounter = (state: RootState) => state.counter.value;
