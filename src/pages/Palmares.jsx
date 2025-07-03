import React from 'react';

const Palmares = () => {
  const titres = [
    {
      competition: "Botola Pro (Championnat du Maroc)",
      nb: 22,
      annees: [
        "1948", "1949", "1950", "1951", "1955", "1957", "1966", "1969", "1976", "1977", "1978", "1986", "1990", "1991", "1993", "2006", "2010", "2015", "2017", "2019", "2021", "2022",  ]
    },
    {
      competition: "Coupe du Trône",
      nb: 9,
      annees: ["1970", "1978", "1979", "1981", "1989", "1994", "1997", "1998", "2001"]
    },
    {
      competition: "Ligue des Champions CAF",
      nb: 3,
      annees: ["1992", "2017", "2022"]
    },
    {
      competition: "Supercoupe CAF",
      nb: 1,
      annees: ["2018"]
    },
    {
      competition: "Coupe Mohammed V",
      nb: 1,
      annees: ["1979"]
    }
  ];

  const finalesPerdues = [
    { competition: "Ligue des Champions CAF", nb: 3, annees: ["2011", "2019", "2023"] },
    { competition: "Coupe du Trône", nb: 6, annees: ["1999", "2004", "2013", "2015", "2020", "2023"] }
  ];

    return (
    <div
      style={{
        backgroundImage: "url('https://digitalhub.fifa.com/transform/44ba6d72-4697-461b-99d0-295dfa3a16ae/FIFA-com_FCWC25_Team-Profile-Thumbnails_Wydad_3840x2160?&io=transform:fill,height:910,width:1536&quality=75')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        minHeight: '100vh',
        color: '#fff',
        textShadow: '1px 1px 2px #000'
      }}
    >
      <div className="container">
        <h2 className="text-center text-light mb-4">🏆 Palmarès du Wydad Athletic Club</h2>

        <p className="lead text-center mb-5">
          Fondé le <strong>8 mai 1937</strong> à Casablanca, le Wydad est l’un des clubs les plus titrés d’Afrique.
          Il représente la fierté nationale du Maroc, grâce à ses nombreux titres et à ses supporters légendaires.
        </p>

        <div className="row">
          <div className="col-md-6">
            <h4 className="text-warning">Titres remportés</h4>
            <ul className="list-group">
              {titres.map((t, index) => (
                <li key={index} className="list-group-item bg-dark text-white">
                  <strong>{t.competition}</strong> – {t.nb} titres
                  <br />
                  <small>Années : {t.annees.join(', ')}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h4 className="text-warning">Finales perdues</h4>
            <ul className="list-group">
              {finalesPerdues.map((f, index) => (
                <li key={index} className="list-group-item bg-dark text-white">
                  <strong>{f.competition}</strong> – {f.nb} finales
                  <br />
                  <small>Années : {f.annees.join(', ')}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Palmares;