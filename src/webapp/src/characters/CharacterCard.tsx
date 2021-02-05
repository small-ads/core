import React from 'react';

interface Props {
  name: string;
  species: string;
  image: string;
}

export const CharacterCard = ({ name, species, image }: Props) => (
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
