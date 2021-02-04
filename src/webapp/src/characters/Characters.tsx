import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { fetchCharacters } from './fetchCharacters';

import './Characters.css';
import { CharacterCard } from './CharacterCard';

export const Characters = () => {
  const dispatch = useDispatch();
  const {
    characters: { list },
    error,
  } = useSelector((state: RootState) => state.characters);

  return (
    <div>
      <h1>Characters</h1>
      <button type='button' onClick={() => dispatch(fetchCharacters())}>
        fetch
      </button>
      {error ? (
        <p>An error has ocurred: {error}. Try again please</p>
      ) : (
        <div className='characters-grid'>
          {list.map(({ image, id, name, species }) => (
            <CharacterCard
              image={image}
              name={name}
              species={species}
              key={id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
