import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  species: string;
  image: string;
}
const Card = styled.div`
  background: black;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 30px;
  color: white;
  box-shadow: 0px 0px 35px 1px rgba(255, 255, 255, 0.8);
  margin: 3rem;
  overflow: hidden;
  position: relative;
  max-width: 300px;
`;

const CardFooter = styled.div`
  padding: 1.5rem;
`;

const PictureWrap = styled.div`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const CharacterName = styled.h3`
  margin: 0;
`;

export const CharacterCard = ({ name, species, image }: Props) => (
  <Card>
    <PictureWrap>
      <img src={image} title={name} alt='character' />
      <CardFooter>
        <CharacterName>{name}</CharacterName>
        <div>{species}</div>
      </CardFooter>
    </PictureWrap>
  </Card>
);
