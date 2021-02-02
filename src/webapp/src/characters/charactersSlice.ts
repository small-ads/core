import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ApiExtraInformation {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: Date;
  image: string;
}

export interface ApiData {
  results: Character[];
  info: ApiExtraInformation;
  error?: string | null;
}

const initialState = {
  results: [] as Character[],
  info: {} as ApiExtraInformation,
  error: null,
} as ApiData;

interface ApiKnownError {
  error: string;
}

export const getCharacters = createAsyncThunk<
  ApiData,
  void,
  { rejectValue: ApiKnownError }
>('characters/getCharacters', async (_, { rejectWithValue }) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);

  if (response.status === 404) {
    return rejectWithValue((await response.json()) as ApiKnownError);
  }

  return (await response.json()) as ApiData;
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
      results: payload.results,
      info: payload.info,
    }));
  },
});

export const charactersReducer = charactersSlice.reducer;
