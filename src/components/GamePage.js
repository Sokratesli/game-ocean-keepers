// src/components/GamePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import GameNav from './GameNav';

const menuItems = [
    { id: 'settings', label: 'Settings', url: '#' },
    { id: 'credits', label: 'Credits', url: '#' },
    // Weitere Menüpunkte nach Bedarf hinzufügen
  ];

const GamePage = ({ onBack }) => {
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <GameNav />
      <div className="relative z-10 text-center text-white w-full mt-20">
        <h1 className="text-3xl font-bold mb-4">Game</h1>
        <p>
          Your game content goes here.
        </p>
      </div>
    </div>
  );
};

export default GamePage;
