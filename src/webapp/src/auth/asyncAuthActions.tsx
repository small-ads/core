import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError } from '@firebase/auth-types';
import { auth, provider } from '../firebase';
import { User } from './types';

export const signInUser = createAsyncThunk<
  User,
  void,
  { rejectValue: AuthError }
>('user/sigInUser', async (_, { rejectWithValue }) => {
  try {
    const { user } = await auth.signInWithPopup(provider);
    const { displayName, uid, email } = user!;
    return { uid, displayName, email };
  } catch (error) {
    return rejectWithValue(error);
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
