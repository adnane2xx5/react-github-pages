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
          Fondé en 1937 à Casablanca, le Wydad AC est l’un des clubs les plus titrés 
          d’Afrique et le symbole de la passion footballistique marocaine.
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