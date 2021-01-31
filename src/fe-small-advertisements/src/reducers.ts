import { personReducer } from './person/personSlice';

export const rootReducer = {
  person: personReducer,
};

export type RootState = typeof rootReducer;
