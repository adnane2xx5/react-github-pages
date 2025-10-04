import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay">
          <h1>❤️⚽ Wydad Athletic Club</h1>
          <p>"Plus qu’un club, une légende du football marocain et africain"</p>
          <Link to="/team" className="btn-hero">Voir l’équipe</Link>
        </div>
      </header>

      {/* Section histoire */}
      <section className="history">
        <h2>📖 Histoire du Wydad</h2>
        <p>
          Le Wydad Athletic Club, également connu sous les noms de Wydad ou WAC, est l’un des clubs les plus emblématiques du Maroc. Fondé en 1937 à Casablanca, le club est réputé pour sa passion, sa résistance et ses succès.
          Surnommé « Le Wydad », le club est connu pour ses couleurs : le rouge et le blanc. Les matchs à domicile se déroulent au Stade Mohamed V, également appelé le Stade d’Honneur ou Donor, une enceinte légendaire qui a été témoin de nombreux exploits du club.
          Le Wydad Athletic Club a été créé par un groupe d’intellectuels et de jeunes résistants pendant l’occupation française du Maroc en 1937, notamment feu Mohamed Benjelloun. Il a d’abord débuté avec une équipe de water-polo avant de former sa section de football en 1939, avec le soutien du Père Jégo.
        </p>
        <Link to="/palmares" className="btn-secondary">Voir le palmarès</Link>
      </section>

      {/* Section navigation rapide */}
      <section className="cards">
        <div className="card">
          <h3>⚽ Équipe</h3>
          <p>Découvrez les joueurs actuels du WAC.</p>
          <Link to="/team" className="btn-card">Voir plus</Link>
        </div>
        <div className="card">
          <h3>🏆 Palmarès</h3>
          <p>Les titres et gloires du club.</p>
          <Link to="/palmares" className="btn-card">Voir plus</Link>
        </div>
        <div className="card">
          <h3>🔥 Fans</h3>
          <p>Les Winners, le 12e homme du Wydad.</p>
          <Link to="/fans" className="btn-card">Voir plus</Link>
        </div>
      </section>
      {/* Section Président */}
      <section className="president-home">
        <h2>👔 Président actuel</h2>
          <div className="president-card-home">
            <img 
              src="https://medias24.com/content/uploads/2024/07/26/ait-menna.png" 
              alt="Hicham Ait Menna" 
            />
            <div>
              <h3>Hicham Ait Menna</h3>
              <p>Président du Wydad AC depuis 2023</p>
            </div>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Wydad AC | Fait avec ❤️ par Mohammed Adnane </p>
      </footer>
    </div>
  );
};

export default Home;