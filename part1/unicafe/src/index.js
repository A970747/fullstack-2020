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
      <Button func={setGood} val={good} text="good" />
      <Button func={setNeutral} val={neutral} text="neutral" />
      <Button func={setBad} val={bad} text="bad" />
      <h2>statistics</h2>
      {
        (allVotes)
          ? <>
              <Statistic stat={good} text='good' />
              <Statistic stat={neutral} text='neutral' />
              <Statistic stat={bad} text='bad' />
              <Statistic stat={allVotes} text='all' />
              <Statistic stat={averageVote} text='average' />
              <Statistic stat={positivePercentage} text='positive' />
            </>
          :
            <p>No feedback given</p>
          }
    </div>
  )
}

function Statistic({text, stat}) {
  return (
    <tr>
      <td>{text}</td>
      <td>{(stat)? stat : 0}</td>
    </tr>
  )
}

function Button({func, val, text}) {
  return <button onClick={ () => func(val + 1) }>{text}</button>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);