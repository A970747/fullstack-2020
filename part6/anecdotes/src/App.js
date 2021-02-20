import React from 'react'
import AddAnecdote from './components/AddAnecdotes'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AddAnecdote />
    </div>
  );
};

export default App;