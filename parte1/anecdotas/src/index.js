import { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));

  
  const anecdotesLength = anecdotes.length - 1
  const index = Math.floor( Math.random() * ( anecdotesLength + 1 ));
  const handleToAnecdotes = () => {
    setSelected(index);
  }

  const handlePoints = (i) => {
    const copy = [...points];
    copy[i] += 1 || 1;
    setPoints(copy);
  }

  const mostVotes = points.indexOf( Math.max(...points) );
  return(
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes </p>
      
      <div>
        <Button handleClick={ handleToAnecdotes } text={"Change Anecdote"} />
        <Button handleClick={ () => {handlePoints(selected) } } text={"Vote"} />
      </div>

      {
        anecdotes[selected] !== anecdotes[mostVotes] && (
          <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotes]}</p>
          </div>
        )
      }
    </div>
  ) 
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(
  <App anecdotes={anecdotes} />, 
  document.getElementById("root")
);
