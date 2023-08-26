import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your Score: {score}</p>
      <Link to="/">Play Again</Link>
    </div>
  );
};

export default Result;
