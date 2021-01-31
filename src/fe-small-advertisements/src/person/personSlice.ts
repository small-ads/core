import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'person',
  initialState: 'LeBron James',
  reducers: {
    setName: (state, { payload }: PayloadAction<{ name: string }>) =>
      payload.name,
  },
});

export const { setName } = personSlice.actions;

export const personReducer = personSlice.reducer;
