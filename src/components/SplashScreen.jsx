import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/9/96/Logo_Wydad_Athletic_Club.png"
          alt="Wydad Logo"
          className="logo"
        />
        <h2 className="slogan">❤️ DIMA WAC ❤️</h2>
      </div>
    </div>
  );
};

export default SplashScreen;