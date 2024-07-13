// src/components/Level1.js
import React, { useState, useEffect } from 'react';
import levelsData from './levels.json';

const Level1 = () => {
  const [levelStarted, setLevelStarted] = useState(false);
  const [countdown, setCountdown] = useState(5); // Countdown beginnt bei 5 Sekunden

  const startLevel = () => {
    setLevelStarted(true);
  };

  useEffect(() => {
    if (levelStarted && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [levelStarted, countdown]);

  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center p-4">
      {levelStarted ? (
        countdown > 0 ? (
          <Countdown countdown={countdown} />
        ) : (
          <Level1Content />
        )
      ) : (
        <Level1Description onStartLevel={startLevel} />
      )}
    </div>
  );
};

const Level1Description = ({ onStartLevel }) => {
    const level1Data = levelsData.levels.find(level => level.level === 1);
  
    if (!level1Data) {
      return null;
    }
  
    const { name, description, missions } = level1Data;
  
    return (
      <div className="relative z-10 text-center text-white w-1/2 mt-20 rounded-lg bg-white bg-opacity-25 p-6">
        <h1 className="text-3xl font-bold mb-4">{`Level ${level1Data.level}: ${name}`}</h1>
        <p className="mb-4">{description}</p>
        <ul className="pl-6 text-left list-disc">
          {missions.map((mission, index) => (
            <li key={index} className="mb-2">{mission}</li>
          ))}
        </ul>
        <button
          onClick={onStartLevel}
          className="mt-4 bg-ocean-500 hover:bg-ocean-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Level
        </button>
      </div>
    );
  };

const Countdown = ({ countdown }) => {
  return (
    <div className="relative z-10 text-center text-white w-1/2 mt-20 rounded-lg bg-white bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">Starting in {countdown}...</h1>
    </div>
  );
};

const Level1Content = () => {
  return (
    <div className="w-full h-full relative z-10 text-center text-white mt-20 rounded-lg bg-white bg-opacity-25 p-6">
      <h1 className="text-3xl font-bold mb-4">Level 1: In Progress</h1>
      <p className="mb-4">
        Complete the tasks to make sustainable choices in everyday life.
      </p>
      {/* Hier können die eigentlichen Aufgaben/Inhalte des Levels hinzugefügt werden */}
    </div>
  );
};

export default Level1;
