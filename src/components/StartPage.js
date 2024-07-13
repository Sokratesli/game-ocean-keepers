// src/components/StartPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/menu_background.webp';
import Nav from './Nav';
import CreditsPage from './CreditsPage';

const StartPage = ({ onStartGame }) => {
  const [showCredits, setShowCredits] = useState(false);

  const menuItems = [
    { id: 'game', label: 'Start Game', type: 'link', url: '/game' },
    { id: 'settings', label: 'Settings', type: 'button', url: '#' },
    { id: 'credits', label: 'Credits', type: 'button' },
  ];

  const handleItemClick = (itemId) => {
    if (itemId === 'game') {
      // Führe hier ggf. Logik für das Starten des Spiels aus
    } else if (itemId === 'credits') {
      setShowCredits(true);
    }
    // Implementiere Logik für andere Menüpunkte nach Bedarf
  };

  const handleBackFromCredits = () => {
    setShowCredits(false);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: '100vh', // Mindesthöhe für volle Bildschirmhöhe
      }}
    >
      <h1 className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-ocean-500 drop-shadow-md">
        OCEAN KEEPERS
      </h1>
      {!showCredits && (
        <Nav menuItems={menuItems} onItemClick={handleItemClick} />
      )}
      {showCredits && <CreditsPage onBack={handleBackFromCredits} />}
    </div>
  );
};

export default StartPage;
