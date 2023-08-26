import React, { useState, useEffect } from 'react';
import { generateMathProblem } from './utils'; // You need to create this utility function

const Game = ({ history }) => {
  const [problem, setProblem] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eval(problem) === parseInt(answer, 10)) {
      setScore(score + 1);
    }
    setAnswer('');
    generateNewProblem();
  };

  const generateNewProblem = () => {
    const newProblem = generateMathProblem();
    setProblem(newProblem);
  };

  useEffect(() => {
    generateNewProblem();
  }, []);

  return (
    <div>
      <h2>Math Problem</h2>
      <p>{problem}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your Answer"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Score: {score}</p>
    </div>
  );
};

export default Game;
