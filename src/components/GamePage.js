// src/components/GamePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import GameNav from './GameNav';
import Levels from './game/Levels';

import backgroundImage from '../assets/images/menu_background.webp';


const GamePage = ({ onBack }) => {

    const [currentLevel, setCurrentLevel] = useState(1);

    const renderLevel = () => {
      switch (currentLevel) {
        case 1:
          return <Levels />;
        // Weitere Levels hier hinzufügen
        default:
          return <Levels />;
      }
    };

    return (
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{
            backgroundImage: `url(${backgroundImage})`,
            minHeight: '100vh', // Mindesthöhe für volle Bildschirmhöhe
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <GameNav />
          <div className="relative z-10 text-center text-white w-full">
            {renderLevel()}
          </div>
        </div>
      );
    };

export default GamePage;
