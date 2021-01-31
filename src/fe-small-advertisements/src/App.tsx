import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { setName } from './features/person/personSlice';

export const App = () => {
  const name = useSelector((state: RootState) => state.person);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const handleUpdateTitle = (e: FormEvent<HTMLFormElement>): void => {
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
      <form onSubmit={handleUpdateTitle}>
        <input
          value={newName}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setNewName(e.target.value);
          }}
        />
        <button type="submit">change name</button>
      </form>
    </>
  );
};
