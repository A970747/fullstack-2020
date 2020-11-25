import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.from(Array(anecdotes.length), () => 0))

  function countVote(index) {
    setVotes(votes.map((e, i) => (i===index) ? e + 1 : e ))
  }

  let highVoteIndex = votes.findIndex(element => element === Math.max(...votes));

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => countVote(selected)}>
        vote
      </button>
      <button onClick={() => {setSelected(Math.floor((Math.random() * 6)))}}>
        next anecdote
      </button>
      <p>Anecdote with most votes:</p>
      {
        anecdotes[highVoteIndex]
      }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);