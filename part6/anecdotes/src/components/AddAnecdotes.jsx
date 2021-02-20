import React from 'react';
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/anecdoteReducer';

function AddAnecdote() {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault();
    dispatch(addNote(e));
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={(e) => addAnecdote(e)}>
        <div><input /></div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AddAnecdote;