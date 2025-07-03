import React from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';
const Team = () => {
  return (
    <div className="container mt-4">
      <h2>Équipe du Wydad</h2>
      <div className="row">
        {players.map(player => (
          <div key={player.id} className="col-md-4">
            <Link to={`/player/${player.id}`} style={{ textDecoration: 'none' }}>
              <div className="card mb-4">
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
  );
};

export default Team;
