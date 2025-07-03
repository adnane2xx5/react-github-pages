// import React, { useState } from 'react';
// import players from '../data/players';
// import coach from '../data/coach';
// const formations = {
//   "4-3-3": {
//     defense: 4,
//     midfield: 3,
//     attack: 3,
//   },
//   "4-4-2": {
//     defense: 4,
//     midfield: 4,
//     attack: 2,
//   },
//   "3-5-2": {
//     defense: 3,
//     midfield: 5,
//     attack: 2,
//   }
// };

// const FormationView = () => {
//   const [currentFormation, setCurrentFormation] = useState("4-3-3");

//   const gardien = players.find(p => p.position === "Gardien de but");
//   const defenseurs = players.filter(p => p.position.includes("Défenseur") || p.position.includes("Arrière"));
//   const milieux = players.filter(p => p.position.includes("Milieu"));
//   const attaquants = players.filter(p => p.position.includes("Attaquant") || p.position.includes("Ailier"));

//   const getLine = (list, count) => list.slice(0, count);

//   const { defense, midfield, attack } = formations[currentFormation];

//   return (
//     <div className="container text-center mt-5">
//       <h2>📋 Formation du Wydad : {currentFormation}</h2>

//       <div className="my-3">
//         {Object.keys(formations).map(f => (
//           <button
//             key={f}
//             className={`btn mx-2 ${currentFormation === f ? 'btn-danger' : 'btn-outline-danger'}`}
//             onClick={() => setCurrentFormation(f)}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       <div style={{
//         background: "url('https://img.freepik.com/vecteurs-libre/terrain-football-vert_225004-1137.jpg?ga=GA1.1.363374266.1746824342&semt=ais_hybrid&w=740') center/cover no-repeat",
//         padding: "20px 20px",
//         borderRadius: "15px",
//         color: "#fff",
//         minHeight: "50px"
//       }}>
//         {/* Attaquants */}
//         <div className="row justify-content-center mb-4">
//           {getLine(attaquants, attack).map(p => (
//             <PlayerBox key={p.id} player={p} />
//           ))}
//         </div>
//         {/* Milieux */}
//         <div className="row justify-content-center mb-4">
//           {getLine(milieux, midfield).map(p => (
//             <PlayerBox key={p.id} player={p} />
//           ))}
//         </div>
//         {/* Défenseurs */}
//         <div className="row justify-content-center mb-4">
//           {getLine(defenseurs, defense).map(p => (
//             <PlayerBox key={p.id} player={p} />
//           ))}
//         </div>
//         {/* Gardien */}
//         {gardien && (
//           <div className="row justify-content-center">
//             <PlayerBox player={gardien} />
//           </div>
//         )}
//       </div>
//       {/* Entraîneur */}
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-3 text-center">
//           <img src={coach.image} alt={coach.name}
//             className="rounded-circle mb-2"
//             style={{ width: '80px', height: '80px', objectFit: 'cover', border: '2px solidrgb(255, 255, 255)' }}
//          />
//         <h5>{coach.name}</h5>
//         <small className="text-muted">{coach.role}</small>
//       </div>
//     </div>
//     </div>
//   );
// };

// const PlayerBox = ({ player }) => (
//   <div className="col-md-2 col-sm-3 mb-3">
//     <img src={player.image} alt={player.name}
//       className="rounded-circle mb-2"
//       style={{ width: '80px', height: '80px', objectFit: 'cover', border: '2px solid white' }} />
//     <div>{player.name}</div>
//     <small>#{player.number}</small>
//   </div>
// );

// export default FormationView;