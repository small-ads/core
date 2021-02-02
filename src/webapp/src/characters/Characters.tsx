import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { getCharacters } from './charactersSlice';

import './Characters.css';

export const Characters = () => {
  const dispatch = useDispatch();
  const { results, error } = useSelector(
    (state: RootState) => state.characters
  );

  const charactersGrid = results.map(({ name, species, image, id }) => (
    <div key={id} className='card'>
      <div className='picture-wrap'>
        <img src={image} title={name} alt='character' />
      </div>
      <div className='card-footer'>
        <h3 className='character-name'>{name}</h3>
        <div>{species}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Characters</h1>
      <button type='button' onClick={() => dispatch(getCharacters())}>
        fetch
      </button>
      {error ? (
        <p>An error has ocurred: {error}. Try again please</p>
      ) : (
        <div className='characters-grid'>{charactersGrid}</div>
      )}
    </div>
  );
};
