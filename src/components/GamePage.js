import React, { useState } from 'react';
import GameNav from './GameNav';
import Levels from './game/Levels';
import Endgame from './game/Endgame';
import backgroundImage from '../assets/images/menu_background.webp';

const GamePage = ({ onBack }) => {
    const [isEndgame, setIsEndgame] = useState(false);
    const [points, setPoints] = useState(0);

    console.log("points", points)

    const handlePointsUpdate = (newPoints) => {
        setPoints(newPoints);
        setIsEndgame(true);
    };

    return (
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{
            backgroundImage: `url(${backgroundImage})`,
            minHeight: '100vh',
          }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <GameNav />
          <div className="relative z-10 text-center text-white w-full">
            {isEndgame ? (
                <Endgame points={points} />
            ) : (
                <Levels onPointsUpdate={handlePointsUpdate} />
            )}
          </div>
        </div>
      );
};

export default GamePage;
