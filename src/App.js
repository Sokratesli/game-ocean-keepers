// Beispiel: src/App.js
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';

const App = () => {
  return (
    <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        {/* Weitere Routen nach Bedarf hinzufügen */}
    </Routes>
  );
};

export default App;