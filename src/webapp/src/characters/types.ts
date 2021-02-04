export interface ApiKnownError {
  error: string;
}
export interface CharactersReducer {
  error?: string | null;
  characters: {
    list: Character[];
  };
}

export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}
