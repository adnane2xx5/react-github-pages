import React from 'react';

const PlayerCard = ({ name, number, position, nationality, image }) => {
  return (
    <div className="card shadow-sm m-2" style={{ width: '220px' }}>
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: '220px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{position}</p>
        <p className="text-muted mb-2">Numéro : {number}</p>
        <Link to={`/player/${id}`} className="btn btn-outline-danger btn-sm">
        Voir fiche
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;