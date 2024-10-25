import { RootState } from '../../store/root';

export const selectUser = (state: RootState) => state.user.data;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
