import { createSlice } from '@reduxjs/toolkit';
import { AuthStatuses, Login } from './types';
import { signInUser, signOutUser } from './asyncAuthActions';

const initialState: Login = {
  user: null,
  error: null,
  authStatus: AuthStatuses.notLoggedIn,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.authStatus = AuthStatuses.loading;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.error = action.payload?.message || action.error?.message;
      state.authStatus = AuthStatuses.notLoggedIn;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.authStatus = AuthStatuses.loggedIn;
    });
    builder.addCase(signOutUser.pending, (state) => {
      state.authStatus = AuthStatuses.loading;
    });
    builder.addCase(signOutUser.rejected, (state, action) => {
      state.error = action.error?.message;
    });
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.user = null;
      state.authStatus = AuthStatuses.notLoggedIn;
    });
  },
});

export const userReducer = userSlice.reducer;
