import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allVotes = good + neutral + bad;
  const averageVote = +(((good * 1) + (bad * -1)) / allVotes).toFixed(2);
  const positivePercentage = Math.round((good / allVotes) * 100);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <Statistic stat={good} text='good' />
      <Statistic stat={neutral} text='neutral' />
      <Statistic stat={bad} text='bad' />
      <Statistic stat={allVotes} text='all' />
      <Statistic stat={averageVote} text='average' />
      <Statistic stat={positivePercentage} text='positive' />
    </div>
  )
}

function Statistic({text, stat}) {
  return (
    <p>{text} {(stat)? stat : 0}</p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);