import React, { useState } from "react";
import "./Fans.css";
const tifos = [
  {
    id: 1,
    title: "Tifo العائلة 2022",
    image: "https://pbs.twimg.com/media/FWIM4QbWQAEF9Y9.jpg:large"
  },
  {
    id: 2,
    title: "Tifo contre Al Ahly (2022)",
    image: "https://static.medias24.com/content/uploads/2023/01/26/no-one.jpg?x37362"
  },
  {
    id: 3,
    title: "Tifo derby Raja-Wydad",
    image: "https://www.ultras-tifo.net/images/stories/2015/12/Wydad-Raja/104.jpg"
  },
  {
    id: 4,
    title: "Tifo Wydad - Raja",
    image: "https://i.ytimg.com/vi/X5YS-lU0Wx4/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Tifo Wydad - Al Ahly",
    image: "https://i.ytimg.com/vi/aCnyOaby0gk/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "Tifo Wydad - FAR",
    image: "https://cdn.snrtnews.com/sites/default/files/2023/01/29/whatsapp-image-2023-01-29-at-19-1675017341.jpeg"
  },
  {
    id: 7,
    title: "Tifo Dragon Ball",
    image: "https://pbs.twimg.com/media/Fu0wiBbWIAAhbzG.jpg"
  },
  {
    id: 8,
    title: "3D Tifo Dragon ",
    image: "https://static.cnews.fr/sites/default/files/football_tifo_maroc_raja_wydad_5dbeb9ace0a89_0.jpg"
  },
  {
    id: 9,
    title: "Tifo 18 BOTOLA",
    image: "https://static.lematin.ma/files/lematin/images/articles/2022/12/12d6589c97ff9139a1a7291c96f6c51c.jpg"
  }
];

const Fans = () => {
  const [selectedTifo, setSelectedTifo] = useState(null);

  return (
    <div className="fans-page">
      <h1>🔥 Les Winners - Supporters du Wydad</h1>
      <div className="tifos-grid">
        {tifos.map((tifo) => (
          <img
            key={tifo.id}
            src={tifo.image}
            alt="Tifo Wydad"
            onClick={() => setSelectedTifo(tifo)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedTifo && (
        <div className="modal-overlay" onClick={() => setSelectedTifo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedTifo.image} alt="Tifo en grand" />
            <p>{selectedTifo.description}</p>
            <button onClick={() => setSelectedTifo(null)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fans;