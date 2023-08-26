import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Arithmetic Quiz Game</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
};

export default Home;
