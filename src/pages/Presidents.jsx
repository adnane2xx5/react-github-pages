import React from "react";


const presidents = [
    {
    id: 1,
    nom: "Haj Abdelkader Benjelloun",
    mandat: "1937 - 1947",
    description: "Président-fondateur, le 8 mai 1937, feu Haj Benjelloun crée le club sportif le plus mythique et historique au Maroc, Wydad Athletic Club, dont il sera décoré Chevalier par le Ouissam alaouite sous les mains du sultan sidi Mohamed ben Youssef en 1956. Ainsi qu'un Ouissam royale tunisien en 1956. Au cours de la même année, haj Benjelloun devint directeur de cabinet au ministère de la Jeunesse et des sports. Il fut également nommé membre du Comité international des Jeux méditerranéens et membre de l'Union arabe des sports. Il fonda l'Union islamique des sports, et jusqu’à sa mort, il était vice-président de la Fédération internationale de rugby amateur (FIRA)[6]. Le défunt avait également fait partie du comité d’organisation des Jeux olympiques d'été de 1972 et des Jeux méditerranéens de 1983, ainsi qu'il était choisi par la FIFA d'être le parrain de la fameuse Internationale Coupe Mohamed-V en 1979[7]. Une espèce rarissime de dirigeants à laquelle appartenait feu Haj Benjelloun[6].En 1982, le roi Hassan II a demandé de nommé le nouveau complexe sportif du WAC au nom de Mohamed Benjelloun en son honneur et depuis, est le centre actuel d'entraînement du club[8].",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZLZEFxu1XBflVcCqTAGRJgYPJzrhQZVNbA&s"
  },
  {
    id: 2,
    nom: "Ahmed Mekouar",
    mandat: "1971 - 1993",
    description: "La nouvelle est tombée comme la foudre ; quoique l'on s'y attende un peu. Car le président mythique du Wydad luttait depuis longtemps contre la maladie. Mais ces derniers temps, il n'en pouvait plus ! Ses forces qui avaient fait de lui un homme d'exception commençaient à le trahir. Il fut hospitalisé, il y a juste trois ou quatre jours, dans un état désespéré. On croyait que l'homme, grâce aux prières des millions de ses fans, de ses sympathisants et de ses connaissances, allait s'en sortir ; mais le Coran ne dit-il pas : « lorsque leur Echéance viendra, ils ne pourront ni avancer d'une heure ni retarder d'une heure». Et aujourd'hui, l'Heure de Abderrazak Mekouar de nous quitter est venue.",
    image: "https://zamane.ma/wp-content/uploads/sites/6/2025/04/Capture-de%CC%81cran-2025-04-07-a%CC%80-15.31.04-1.jpg"
  },
  {
    id: 3,
    nom: "Said Naciri",
    mandat: "2014 - 2024",
    description: "En 2014, Said Naciri a été élu nouveau président, succédant à Abdelilah Akram, qui avait dû quitter ses fonctions suite au boycott des supporters du Wydad, qui critiquaient sa gestion du club.Le président Said Naciri a permis au club de retrouver la stabilité grâce à une gestion, certes autoritaire mais efficace. Sa stratégie a rapidement porté ses fruits, et le Wydad est redevenu un grand club africain qui suscite l’attention dans le monde entier. Depuis 2015, le Wydad a remporté le championnat à cinq reprises et a terminé au pire à la deuxième place. Le club s’est également illustré en remportant deux Ligue des Champions africaine, la première sous la direction de Houcine Ammouta et la deuxième avec Oualid Regragui, qui a ensuite rejoint l’équipe nationale du Maroc en tant que sélectionneur et a réussi à atteindre les demi-finales de la Coupe du Monde 2022 au Qatar.",
    image: "https://fr.le360.ma/resizer/v2/JYVCODAV6BDFVKRCJRC7TMUUUA.jpg?auth=65a0881d0f403e9a8446b79972d4084c8f5e77d71da0e6941b75c770c684b592&smart=true&width=1216&height=684"
  }
];
const Presidents = () => {
    return (
        <div className="container my-5">
            <h2 className="text-centre text-danger mb-4">👨🏻‍💼 Les président du Wydad Athletic Club</h2>
            <div className="row">
                {presidents.map(p => (
                    <div key={p.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={p.image} className="card-img-top" alt={p.nom} />
                            <div className="card-body">
                                <h5 className="card-title">{p.nom}</h5>
                                <p className="card-text"><strong>Mandat :</strong>{p.mandat}</p>
                                <p className="card-text">{p.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Presidents;