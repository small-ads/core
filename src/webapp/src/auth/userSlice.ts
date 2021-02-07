import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';
import { signInUser, signOutUser } from './asyncActionsCreators';

export enum AuthStatuses {
  notLoggedIn,
  loggedIn,
  loading,
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}
interface Login {
  user: User | null;
  error?: string | null;
  authStatus: AuthStatuses;
}

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
      state.error = action.error?.message;
      state.authStatus = AuthStatuses.notLoggedIn;
    });
    builder.addCase(signInUser.fulfilled, (state) => {
      const { uid, displayName, email } = auth.currentUser!;
      state.user = { uid, displayName, email };
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
