export interface ApiKnownError {
  error: string;
}
export interface CharactersReducer {
  list: Character[];
  error?: string | null;
}

export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}
