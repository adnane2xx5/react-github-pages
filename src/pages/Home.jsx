import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/9/96/Logo_Wydad_Athletic_Club.png"
          alt="Logo Wydad"
          className="home-logo"
        />
        <h1>Wydad Athletic Club</h1>
        <p>
          Fondé en 1937 à Casablanca, le Wydad Athletic Club est l’un des clubs les plus titrés d’Afrique.
          Il a remporté de nombreuses compétitions nationales et continentales,
          dont plusieurs Ligue des Champions de la CAF. Soutenu par les légendaires Winners,
          le Wydad est bien plus qu’un club : c’est un symbole.
        </p>

        {/* <section className="info-panel">
          <h1>Mes informations</h1>
          <p>Nom : Mohamed Adnane</p>
          <p>Email : medadnane999@gmail.com</p>
          <p>Téléphone : 06 49 86 80 06 </p>
        </section> */}
      </div>
    </div>
  );
};

export default Home;
