import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface StateData {
  results: StateCharacter[];
  error?: string | null;
}

export interface StateCharacter {
  id: number;
  name: string;
  species: string;
  image: string;
}
interface ApiKnownError {
  error: string;
}
const initialState = {
  results: [] as StateCharacter[],
  error: null,
} as StateData;

export const getCharacters = createAsyncThunk<
  StateCharacter[],
  void,
  { rejectValue: ApiKnownError }
>('characters/getCharacters', async (_, { rejectWithValue }) => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  if (response.status === 404) {
    return rejectWithValue((await response.json()) as ApiKnownError);
  }
  const { results } = await response.json();

  return results.map(({ species, image, id, name }: StateCharacter) => ({
    species,
    image,
    id,
    name,
  }));
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, () => {});

    builder.addCase(getCharacters.rejected, (state, action) => {
      if (action.payload) {
        return { ...state, error: action.payload.error };
      }
      return { ...state, error: action.error.message };
    });

    builder.addCase(getCharacters.fulfilled, (state, { payload }) => ({
      ...state,
      results: payload,
    }));
  },
});

export const charactersReducer = charactersSlice.reducer;
