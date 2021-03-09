import { createSlice } from '@reduxjs/toolkit';
import { AuthStatuses, Login } from './types';
import { signInUser, signOutUser } from './asyncAuthActions';

const initialState: Login = {
  uid: undefined,
  displayName: undefined,
  email: undefined,
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
      const { uid, displayName, email } = payload;
      state.uid = uid;
      state.displayName = displayName!;
      state.email = email!;
      state.authStatus = AuthStatuses.loggedIn;
    });
    builder.addCase(signOutUser.pending, (state) => {
      state.authStatus = AuthStatuses.loading;
    });
    builder.addCase(signOutUser.rejected, (state, action) => {
      state.error = action.error?.message;
    });
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.uid = undefined;
      state.displayName = undefined;
      state.email = undefined;
      state.authStatus = AuthStatuses.notLoggedIn;
    });
  },
});

export const userReducer = userSlice.reducer;
