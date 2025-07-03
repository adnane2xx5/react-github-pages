import React from 'react';

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
  return (
    <div
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/15/6c/c6/156cc6358d01dd90e0cd3570b2350ed9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        minHeight: '100vh',
        color: '#fff',
        textShadow: '1px 1px 3px black'
      }}
      >
      <div className="container my-5">
        <h2 className="text-center mb-4">❤️ Ultras Winners 2005 - Wydad Fans</h2>
        <p className="text-center mb-4">
          Ultras Winners 2005 est un groupe de fans soutenant le Wydad Atlhetic Club. Il a été fondé le 13 novembre 2005 par des jeunes amoureux de l'équipe. Ultras Winners a été classé parmi les meilleurs ultras du monde en 2015/2023/2022/2019 par le site « Ultra World » anglais : Ultras World spécialisé dans l'actualité ultras
        </p>
        <div className="row">
          {tifos.map(tifo => (
            <div key={tifo.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img src={tifo.image} alt={tifo.title} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{tifo.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fans;