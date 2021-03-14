import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError } from '@firebase/auth-types';
import { auth, provider } from '../firebase';
import { UserData } from './types';

export const signInUser = createAsyncThunk<
  UserData,
  void,
  { rejectValue: AuthError }
>('user/sigInUser', async (_, { rejectWithValue }) => {
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
