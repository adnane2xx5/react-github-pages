import React from "react";
import "./Palmares.css";

const Palmares = () => {
  return (
    <div className="palmares-page">
      <div className="palmares-overlay">
        <div className="container text-center">
          <h1 className="palmares-title">🏆 Palmarès du Wydad Athletic Club</h1>
          <p className="palmares-subtitle">
            Un des clubs les plus titrés d’Afrique et du Maroc
          </p>

          {/* Section cartes trophées */}
          <div className="trophies">
            <div className="trophy-card">
              <h2>Coupe d'Afrique des Clubs Champions</h2>
              <p>3 titres : 1992, 2017, 2022</p>
            </div>
            <div className="trophy-card">
              <h2>Botola Pro (Championnat du Maroc)</h2>
              <p>22 titres (record national)</p>
            </div>
            <div className="trophy-card">
              <h2>Coupe du Trône</h2>
              <p>9 titres</p>
            </div>
            <div className="trophy-card">
              <h2>Supercoupe de la CAF</h2>
              <p>1 titre : 2018</p>
            </div>
          </div>

          {/* Section Timeline */}
          <h2 className="timeline-title">📅 Moments Historiques</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">1992</span>
              <p>Première Ligue des Champions CAF remportée 🏆</p>
            </div>
            <div className="timeline-item">
              <span className="year">2017</span>
              <p>Deuxième Ligue des Champions CAF, victoire face à Al-Ahly 🇪🇬</p>
            </div>
            <div className="timeline-item">
              <span className="year">2022</span>
              <p>Troisième Ligue des Champions CAF, victoire contre Al-Ahly au Maroc 🏟️</p>
            </div>
          </div>

          <footer className="palmares-footer">
            <p>Le Wydad AC incarne la passion, la gloire et la fierté du football marocain. ❤️⚽</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Palmares;
