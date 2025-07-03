import React from 'react';
import { useParams, Link } from 'react-router-dom';
import players from '../data/players';

const PlayerDetail = () => {
  const { id } = useParams();
  const player = players.find(p => p.id === parseInt(id));

  if (!player) return <p className="text-center mt-5">Joueur introuvable.</p>;

  return (
    <div className="container my-5">
      <div className="card mx-auto shadow" style={{ maxWidth: '500px' }}>
        <img src={player.image} className="card-img-top" alt={player.name} />
        <div className="card-body">
          <h3 className="card-title text-center">{player.name}</h3>
          <p className="text-center text-muted">Poste : {player.position}</p>
          <p className="text-center">Numéro : {player.number}</p>
          <p className="text-center">Nationalité : {player.nationality}</p>
          <hr />
          <h5 className="text-center">📊 Statistiques</h5>
          <table className="table table-bordered mt-3">
            <tbody>
              {player.position === "Gardien de but" ? (
                <>
                  <tr><td>Clean Sheets</td><td>{player.stats.cleanSheets}</td></tr>
                  <tr><td>Saves</td><td>{player.stats.saves}</td></tr>
                  <tr><td>Matchs</td><td>{player.stats.matchs}</td></tr>
                </>
              ) : (
                <>
              <tr><td>Buts</td><td>{player.stats.buts}</td></tr>
              <tr><td>Passes</td><td>{player.stats.passes}</td></tr>
              <tr><td>Matchs</td><td>{player.stats.matchs}</td></tr>
                </>
              )}
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Link to="/team" className="btn btn-danger">← Retour à l'équipe</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;