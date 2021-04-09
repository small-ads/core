import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError, AuthProvider } from '@firebase/auth-types';
import { auth } from '../firebase';
import { UserData } from './types';

export const signInUser = createAsyncThunk<
  UserData,
  AuthProvider,
  { rejectValue: AuthError }
>('user/sigInUser', async (provider: AuthProvider, { rejectWithValue }) => {
  try {
    const { user } = await auth.signInWithPopup(provider)!;

    const { displayName, uid, email } = user!;
    return { uid, displayName, email };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signOutUser = createAsyncThunk(
  'user/signOutUser',
  async (_, { rejectWithValue }) => {
    try {
      return await auth.signOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
