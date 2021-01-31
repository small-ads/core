import personReducer from '../features/person/personSlice';

export const rootReducer = {
  person: personReducer,
};

export type RootState = typeof rootReducer;
