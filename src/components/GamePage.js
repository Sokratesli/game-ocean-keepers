// src/components/GamePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const GamePage = ({ onBack }) => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center w-1/2 rounded-lg bg-white bg-opacity-25 p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Game</h1>
        <p className="text-white">
          Your game content goes here.
        </p>
        <Link
          to="/" // Link zur Startseite
          className="bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Back to Menu
        </Link>
        <button
          className="bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default GamePage;
