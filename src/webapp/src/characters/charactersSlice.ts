import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from './fetchCharacters';
import { CharactersReducer } from './types';

const initialState: CharactersReducer = {
  list: [],
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, () => {});

    builder.addCase(fetchCharacters.rejected, (state, action) => ({
      ...state,
      error: action.payload?.error || action.error?.message,
    }));

    builder.addCase(fetchCharacters.fulfilled, (state, { payload }) => ({
      ...state,
      list: payload
    }));
  },
});

export const charactersReducer = charactersSlice.reducer;
