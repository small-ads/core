import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, provider } from "../firebase";

export const signInUser = createAsyncThunk('user/sigInUser', async () => {
  await auth.signInWithPopup(provider);
});

export const signOutUser = createAsyncThunk('user/signOutUser', async () => {
  await auth.signOut();
});
