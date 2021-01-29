import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const vote = (id) => {
    dispatch({type: "INCREMENT_VOTE", data: { id }});
    console.log('vote', id)
  }

  const addAnecdote = (e) => {
    e.preventDefault();
    dispatch({type: "ADD_NOTE", data: { anecdote: e.target.elements[0].value}});
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => (a.votes > b.votes) ? -1 : 1).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={(e) => addAnecdote(e)}>
        <div><input /></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;