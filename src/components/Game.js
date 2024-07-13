// src/components/Game.js
import React, { useState } from 'react';

const Game = ({ onEndGame }) => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    onEndGame(score);
  };

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">OceanKeepers</h1>
      <p className="text-xl">Score: {score}</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={endGame}
      >
        End Game
      </button>
    </div>
  );
};

export default Game;
