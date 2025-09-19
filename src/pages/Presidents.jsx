import React, { useState } from "react";
import "./Presidents.css";


const presidents = [
    {
    id: 1,
    nom: "Haj Abdelkader Benjelloun",
    mandat: "1937 - 1947",
    description: "Président-fondateur, le 8 mai 1937, feu Haj Benjelloun crée le club sportif le plus mythique et historique au Maroc, Wydad Athletic Club, dont il sera décoré Chevalier par le Ouissam alaouite sous les mains du sultan sidi Mohamed ben Youssef en 1956. Ainsi qu'un Ouissam royale tunisien en 1956. Au cours de la même année, haj Benjelloun devint directeur de cabinet au ministère de la Jeunesse et des sports. Il fut également nommé membre du Comité international des Jeux méditerranéens et membre de l'Union arabe des sports. Il fonda l'Union islamique des sports, et jusqu’à sa mort, il était vice-président de la Fédération internationale de rugby amateur (FIRA).",
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
    mandat: "2014 - 2023",
    description: "En 2014, Said Naciri a été élu nouveau président, succédant à Abdelilah Akram, qui avait dû quitter ses fonctions suite au boycott des supporters du Wydad, qui critiquaient sa gestion du club.Le président Said Naciri a permis au club de retrouver la stabilité grâce à une gestion, certes autoritaire mais efficace. Sa stratégie a rapidement porté ses fruits, et le Wydad est redevenu un grand club africain qui suscite l’attention dans le monde entier. Depuis 2015, le Wydad a remporté le championnat à cinq reprises et a terminé au pire à la deuxième place. Le club s’est également illustré en remportant deux Ligue des Champions africaine, la première sous la direction de Houcine Ammouta et la deuxième avec Oualid Regragui, qui a ensuite rejoint l’équipe nationale du Maroc en tant que sélectionneur et a réussi à atteindre les demi-finales de la Coupe du Monde 2022 au Qatar.",
    image: "https://fr.le360.ma/resizer/v2/JYVCODAV6BDFVKRCJRC7TMUUUA.jpg?auth=65a0881d0f403e9a8446b79972d4084c8f5e77d71da0e6941b75c770c684b592&smart=true&width=1216&height=684"
  },
  {
    id: 4,
    nom: "Hicham Ait Menna",
    mandat: "2024 - now",
    description: "Le président actuel du Wydad Athletic Club est Hicham Ait Menna. Il a pris ses fonctions en juillet 2024, suite à la réorganisation du club, et s'est exprimé publiquement sur des sujets tels que le recrutement de Cristiano Ronaldo.",
    image: "https://medias24.com/content/uploads/2024/07/26/ait-menna.png"
  },
];
const Presidents = () => {
    const [selectedPresident, setSelectedPresident] = useState(null);

    return (
        <div className="presidents-page">
            <div className="overlay">
                <h1 className="title">👔 Présidents du Wydad AC</h1>
                <p className="subtitle">Cliquez sur un président pour voir plus de détails.</p>

                <div className="presidents-grid">
                    {presidents.map((president) => (
                        <div
                            key={president.id}
                            className="president-card"
                            onClick={() => setSelectedPresident(president)}
                        >
                            <img src={president.image} alt={president.name} />
                            <h3>{president.name}</h3>
                            <p className="years">{president.years}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedPresident && (
                    <div className="modal-overlay" onClick={() => setSelectedPresident(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedPresident.image} alt={selectedPresident.name} />
                            <h2>{selectedPresident.name}</h2>
                            <p><strong>Période :</strong> {selectedPresident.years}</p>
                            <p>{selectedPresident.description}</p>
                            <button onClick={() => setSelectedPresident(null)}>Fermer</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Presidents;