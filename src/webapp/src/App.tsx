<<<<<<< HEAD
import React, { FormEvent, useState } from 'react';
import { Button } from '@small-ads/ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { setName } from './person/personSlice';
=======
import React from 'react';
>>>>>>> feat: :construction_worker: add Google autenthication with firebase
import { Characters } from './characters/Characters';

import { Person } from './person/Person';
import { Auth } from './auth/Auth';

<<<<<<< HEAD
  const handleNameUpdate = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newName.trim()) {
      return;
    }
    dispatch(setName({ name: newName }));
    setNewName('');
  };

  return (
    <>
      <p>I am a person with the name: {name}</p>
      <form onSubmit={handleNameUpdate}>
        <input
          value={newName}
          onChange={(e): void => {
            setNewName(e.target.value);
          }}
        />
        <button type='submit'>change name</button>
        <Button onClick={() => {}} type='secondary'>
          Call to Action
        </Button>
      </form>
      <Characters />
    </>
  );
};
=======
export const App = () => (
  <>
    <Auth />
    <Person />
    <Characters />
  </>
);
>>>>>>> feat: :construction_worker: add Google autenthication with firebase
