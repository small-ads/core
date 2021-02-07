import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { fetchCharacters } from './fetchCharacters';

import { CharacterCard } from './CharacterCard';

const CharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
`;

export const Characters = () => {
  const dispatch = useDispatch();
  const { list, error } = useSelector((state: RootState) => state.characters);

  return (
    <div>
      <h1>Characters</h1>
      <button type='button' onClick={() => dispatch(fetchCharacters())}>
        fetch
      </button>
      {error ? (
        <p>An error has ocurred: {error}. Try again please</p>
      ) : (
        <CharactersGrid>
          {list.map(({ image, id, name, species }) => (
            <CharacterCard
              image={image}
              name={name}
              species={species}
              key={id}
            />
          ))}
        </CharactersGrid>
      )}
    </div>
  );
};
