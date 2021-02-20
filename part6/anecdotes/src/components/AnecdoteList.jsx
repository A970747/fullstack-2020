import React from 'react';
import { addVote } from '../store/actions/anecdoteActions';
import { useSelector, useDispatch } from 'react-redux'

function AnecdoteList() {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id));
  }

  return (
    <>
    {
      anecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
    }
    </>
  );
};

export default AnecdoteList;