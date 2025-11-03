
const players = [
  {
    id: 1,
    name: "YOUSSEF EL MOTIE",
    number: 1,
    position: "Gardien de but",
    nationality: "Marocain 🇲🇦",
    image: "https://wydad.net/medias/players/youssef-el-motie.webp",
    stats: {
      cleanSheets: 0,
      saves: 0,
      matchs: 0
    }
  },
  {
    id: 2,
    name: "EL MEHDI BENABID",
    number: 12,
    position: "Gardien de but",
    nationality: "Marocain 🇲🇦",
    image: "https://wydad.net/medias/players/el-mehdi-benabid.webp",
    stats: {
      cleanSheets: 0,
      saves: 8,
      matchs: 3
    }
  },
  {
    id: 3,
    name: "OMAR AQZDAOU",
    number: 36,
    position: "Gardien de but",
    nationality: "Marocain 🇲🇦",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcr-xAUjDBb5sZNHciXMkwnOTGUxkHeXpmA&s",
    stats: {
      cleanSheets: 0,
      saves: 0,
      matchs: 0
    }
  },
    {
    id: 4,
    name: "MOHAMED MOUFID",
    number: 2,
    position: "Défenseur",
    nationality: "Marocain 🇲🇦",
    image:"https://wydad.net/medias/players/mohamed-moufid.webp",
    stats: {
      buts: 0,
      passes: 1,
      matchs: 3
    }
  },
  {
    id: 5,
    name: "BART MEIJERS",
    number: 22,
    position: "Défenseur",
    nationality: "Pays-Bas 🇳🇱",
    image: "https://wydad.net/medias/players/bart-meijers.webp",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 2
    }
  },
  {
    id: 6,
    name: "AYOUB BOUCHETA",
    number: 24,
    position: "Défenseur",
    nationality: "Marocain 🇲🇦",
    image: "https://wydad.net/medias/players/ayoub_boucheta.webp",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 1
    }
  },
  {
    id: 7,
    name: "AMINE ABOULFATH",
    number: 37,
    position: "Défenseur",
    nationality: "Marocain 🇲🇦",
    image: "https://wydad.net/medias/players/amine-aboulfath.webp",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 0
    }
  },
  {
    id: 8,
    name: "GUILHERME FERREIRA",
    number: 72,
    position: "Défenseur",
    nationality: "Brésilien 🇧🇷",
    image: "https://wydad.net/medias/players/guilherme-ferreira.webp",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 3
    }
  },
  {
    id: 9,
    name: "MOHAMMED EL JADIDI",
    number: 15,
    position: "Défenseur",
    nationality: "Marocain 🇲🇦",
    image: "https://img.freepik.com/photos-premium/silhouette-homme-adulte-avatar-masculin-pour-reseaux-sociaux-illustration-isolee_314149-11958.jpg?semt=ais_hybrid&w=740&q=80",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 0
    }
  },
  {
    id: 10,
    name: "MOHAMED BOUCHOUARI",
    number: 17,
    position: "Défenseur",
    nationality: "Marocain 🇲🇦",
    image: "https://img.freepik.com/photos-premium/silhouette-homme-adulte-avatar-masculin-pour-reseaux-sociaux-illustration-isolee_314149-11958.jpg?semt=ais_hybrid&w=740&q=80",
    stats: {
      buts: 0,
      passes: 0,
      matchs: 0
    }
  },
  {
  id: 11,
  name: "ABDELGHAFOUR LAMIRAT",
  number: 15,
  position: "Milieu",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/abdelghafour-lamirat.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 12,
  name: "RAYANE MAHTOU",
  number: 44,
  position: "Milieu",
  nationality:"Marocain 🇲🇦",
  image: "https://img.freepik.com/photos-premium/silhouette-homme-adulte-avatar-masculin-pour-reseaux-sociaux-illustration-isolee_314149-11958.jpg?semt=ais_hybrid&w=740&q=80",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 13,
  name: "OUSSAMA ZEMRAOUI",
  number: 23,
  position: "Milieu",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/oussama-zemraoui.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 3
  }
},
{
  id: 14,
  name: "WALID SABBAR",
  number: 21,
  position: "Milieu",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/walid-sabbar.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 15,
  name: "ARTHUR WENDERROSCKY",
  number: 10,
  position: "Milieu",
  nationality: "Brésilien 🇧🇷",
  image: "https://wydad.net/medias/players/arthur-wenderroscky-sanches.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 16,
  name: "PEDRINHO",
  number: 33,
  position: "Milieu",
  nationality: "Brésilien 🇧🇷",
  image: "https://wydad.net/medias/players/pedro-henrique-de-assis-pedrinho.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 17,
  name: "STÉPHANE AZIZ KI",
  number: 25,
  position: "Milieu",
  nationality: "Cote D'Ivoire 🇨🇮",
  image: "https://wydad.net/medias/players/aziz-ki-stephane.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 18,
  name: "MOUAD ENZO",
  number: 90,
  position: "Milieu",
  nationality: "Marocain 🇲🇦",
  image: "https://img.freepik.com/photos-premium/silhouette-homme-adulte-avatar-masculin-pour-reseaux-sociaux-illustration-isolee_314149-11958.jpg?semt=ais_hybrid&w=740&q=80",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 19,
  name: "THEMBINKOSI LORCH",
  number: 4,
  position: "Attaquant",
  nationality: "Afrique du Sud 🇿🇦",
  image: "https://wydad.net/medias/players/thembinkosi-lorch.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 20,
  name: "MOHAMED RAYHI",
  number: 8,
  position: "Attaquant",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/mohamed-rayhi.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 21,
  name: "NORDIN AMRABAT",
  number: 11,
  position: "Attaquant",
  nationality: "Marocain / Pays-Bas 🇲🇦",
  image: "https://wydad.net/medias/players/nordine-amrabat.webp",
  stats: {
    buts: 0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 22,
  name: "HAMZA HANNOURI",
  number: 29,
  position: "Attaquant",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/hamza-hannouri.webp",
  stats: {
    buts:0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 23,
  name: "ZOUHAIR EL MOUTARAJI",
  number: 37,
  position: "Attaquant",
  nationality: "Marocain 🇲🇦",
  image: "https://africafoot.com/wp-content/uploads/2024/10/Zouheir-El-Moutaraji.webp",
  stats: {
    buts:0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 24,
  name: "WALID NASSI",
  Number: 28,
  position: "Attaquant",
  nationality: "Marocain 🇲🇦",
  image: "https://wydad.net/medias/players/walid-nassi.webp",
  stats: {
    buts:0,
    passes: 0,
    matchs: 0
  }
},
{
  id: 25,
  name: "HAKIM ZIYACH",
  Number: 7,
  position: "Attaquant",
  nationality: "Marocain 🇲🇦",
  image:"https://wydad.net/medias/players/hakim-ziyech.webp",
  stats: {
    buts:0,
    passes: 0,
    matchs: 0,
  }
}


];

export default players;