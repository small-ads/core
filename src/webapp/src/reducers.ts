import { combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from './characters/charactersSlice';
import { personReducer } from './person/personSlice';

export const rootReducer = combineReducers({
  person: personReducer,
  characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
