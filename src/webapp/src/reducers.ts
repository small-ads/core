import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './auth/userSlice';
import { charactersReducer } from './characters/charactersSlice';
import { personReducer } from './person/personSlice';

export const rootReducer = combineReducers({
  person: personReducer,
  characters: charactersReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
