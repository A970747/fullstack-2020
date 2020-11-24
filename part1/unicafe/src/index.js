import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    </div>
  )
}

function Statistic({text, stat}) {
  return (
    <p>{text} {stat}</p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);