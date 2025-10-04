import React from 'react';
import { Link } from 'react-router-dom';
import players from '../data/players';
import staff from '../data/staff';
import "../pages/Team.css";
const Team = () => {
  const groupedPlayers = {
    Attaquants: players.filter(p =>
      p.position.toLowerCase().includes("attaquant") ||
      p.position.toLowerCase().includes("ailier")
    ),
    Milieux: players.filter(p =>
      p.position.toLowerCase().includes("milieu")
    ),
    Défenseurs: players.filter(p =>
      p.position.toLowerCase().includes("défenseur") ||
      p.position.toLowerCase().includes("defenseur") ||
      p.position.toLowerCase().includes("arrière")
    ),
    Gardiens: players.filter(p =>
      p.position.toLowerCase().includes("gardien")
    )
  };

  // Associer chaque catégorie à une couleur
  const categoryColors = {
    Attaquants: "category-attaquants",
    Milieux: "category-milieux",
    Défenseurs: "category-defenseurs",
    Gardiens: "category-gardiens"
  };

  return (
    <div className="team-page">
      <div className="contrainer mt-4"></div>
      <h2 className="text-center mb-4">Équipe du Wydad AC</h2>

      {Object.keys(groupedPlayers).map(category => (
        <div key={category} className={`mb-5 ${categoryColors[category]}`}>
          <h3 className="text-center">{category} ({groupedPlayers[category].length})</h3>
          <div className="row">
            {groupedPlayers[category].map(player => (
              <div key={player.id} className="col-md-4">
                <Link to={`/player/${player.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card mb-4 shadow-sm">
                    <img src={player.image} className="card-img-top" alt={player.name} />
                    <div className="card-body text-center">
                      <h5>{player.name}</h5>
                      <p>{player.position}</p>
                      <p><small>{player.nationality}</small></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Staff technique */}
      <h2 className="text-center mt-5 mb-4">Staff technique</h2>
      <div className="row">
        {staff.map(member => (
          <div key={member.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5>{member.name}</h5>
                <p>{member.role}</p>
                <p><small>{member.nationality}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
