import React from 'react';
import { StateCharacter } from './charactersSlice';

interface Props {
  character: StateCharacter;
}

export const CharacterCard = ({
  character: { name, species, image },
}: Props) => (
  <div className='card'>
    <div className='picture-wrap'>
      <img src={image} title={name} alt='character' />
    </div>
    <div className='card-footer'>
      <h3 className='character-name'>{name}</h3>
      <div>{species}</div>
    </div>
  </div>
);
