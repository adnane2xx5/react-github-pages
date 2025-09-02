import React from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';

const Team = () => {
  // Grouper les joueurs par poste
  const groupedPlayers = {
    Attaquants: players.filter(p => p.position.toLowerCase().includes("attaquant") || p.position.toLowerCase().includes("ailier")),
    Milieux: players.filter(p => p.position.toLowerCase().includes("milieu")),
    Défenseurs: players.filter(p => p.position.toLowerCase().includes("défenseur") || p.position.toLowerCase().includes("arrière")),
    Gardiens: players.filter(p => p.position.toLowerCase().includes("gardien")),
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Équipe du Wydad</h2>

      {Object.keys(groupedPlayers).map(category => (
        <div key={category} className="mb-5">
          <h3 className="text-danger">{category}</h3>
          <div className="row">
            {groupedPlayers[category].map(player => (
              <div key={player.id} className="col-md-4">
                <Link to={`/player/${player.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card mb-4 shadow-sm">
                    <img src={player.image} className="card-img-top" alt={player.name} />
                    <div className="card-body text-center">
                      <h5>{player.name}</h5>
                      <p>{player.position}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
