import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiKnownError, Character } from './types';

export const fetchCharacters = createAsyncThunk<
  Character[],
  void,
  { rejectValue: ApiKnownError }
>('characters/fetchCharacters', async (_, { rejectWithValue }) => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (response.ok) {
    const { results } = await response.json();
    return results.map(({ species, image, id, name }: Character) => ({
      species,
      image,
      id,
      name,
    }));
  }
  return rejectWithValue((await response.json()) as ApiKnownError);
});
