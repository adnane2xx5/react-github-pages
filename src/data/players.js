import { buttonBaseClasses, stackClasses } from "@mui/material";

const players = [
  {
    id: 1,
    name: "Guy Mbenza",
    number: 9,
    position: "Attaquant",
    nationality: "République Démocratique du Congo",
    image: "https://sport.le360.ma/resizer/v2/KYGMS63SZZJO7IITF55LA7XCCM.jpg?auth=871e4185c70bbb2e8b482573aa550f8cb1877add5d8c78b8632f2d6555ca60a0&smart=true&width=1216&height=684",
    stats: {
      buts: 18,
      passes: 5,
      matchs: 32
    }
  },
  {
    id: 2,
    name: "Zouhair El Moutaraji",
    number: 7,
    position: "Ailier gauche",
    nationality: "Maroc",
    image: "https://africafoot.com/wp-content/uploads/2024/10/Zouheir-El-Moutaraji.webp",
    stats: {
      buts: 2,
      passes: 7,
      matchs: 28
    }
  },
  {
    id: 3,
    name: "Muaid Ellafi",
    number: 28,
    position: "Ailier droit",
    nationality: "Libye",
    image: "https://cdn.snrtnews.com/sites/default/files/2022/03/10/muaid-ellafi-1646923954.jpeg",
    stats: {
      buts: 2,
      passes: 7,
      matchs: 28
      
    }
  },
  {
    id: 4,
    name: "Aymane El Hassouni",
    number: 10,
    position: "Milieu offensif",
    nationality: "Maroc",
    image: "https://africafoot.com/wp-content/uploads/2024/05/Ayman-El-Hassouni.webp",
    stats: {
      buts: 22,
      passes: 18,
      matchs: 40
    }
  },
  {
    id:5,
    name: "Walid El Karti",
    number: 18,
    position: "Milieu central",
    nationality: "Maroc",
    image:"https://sport.le360.ma/resizer/v2/DSEMNKUMGZL2LP6V6YLOOT2D2Q.jpg?auth=49eb7f111969b9fe0b5099104d6c8ca792c383952cae6d82f28112a7526ca456&smart=true&width=1216&height=684",
    stats: {
      buts: 16,
      passes: 8,
      matchs: 30
    }
  },
  {
    id: 6,
    name: "Yahya Jabrane",
    number: 5,
    position: "Milieu défensif",
    nationality: "Maroc",
    image: "https://sport.le360.ma/resizer/v2/4H5F7ZBD6BOYLHDCV2JPVPHDVE.jpg?auth=998132777439dd86b7cdb96b1ac9b2b90f23f36012f44b6e08603c311798006f&smart=true&width=1216&height=684",
    stats: {
      buts: 4,
      passes: 3,
      matchs: 30
    }
  },
  {
    id: 7,
    name: "Achraf Dari",
    number: 4,
    position: "Défenseur central",
    nationality: "Maroc",
    image: "https://www.lopinion.ma/photo/art/grande/65702075-46820091.jpg?v=1656418970",
    stats: {
      buts: 1,
      passes: 0,
      matchs: 30
    }
  },
  {
    id: 8,
    name: "Amnine Farhane",
    number: 3,
    position: "Défenseur central", 
    nationality: "Maroc",
    image: "https://cdn.snrtnews.com/sites/default/files/2022/05/16/farhane-1652736459.jpg",
    stats: {
      buts: 0,
      passes: 1,
      matchs: 30
    }
  },
  {
    id: 9,
    name: "yahya Attiat Allah",
    number: 2,
    position: "Arrière gauche",
    nationality: "Maroc",
    image: "https://africafoot.com/wp-content/uploads/2023/08/Yahya-Attiat-Allah-2.webp",
    stats: {
      buts: 1,
      passes: 18,
      matchs: 30
    }
  },
  {
    id: 10,
    name: "Ayoub El Amloud",
    number: 14,
    position: "Arrière droit",
    nationality: "Maroc",
    image: "https://sport.le360.ma/resizer/v2/KJN7V46YEJP43NBGMFOAZO3K2M.jpg?auth=cec5ed94bbabd554ae8ff22e78f9adbdd9da80075c7c31988fd0ce7e2e5c4862&smart=true&width=1216&height=684",
    stats: {
      buts: 5,
      passes: 11,
      matchs: 30
    }
  },
  {
    id: 11,
    name: "Ahmed Reda Tagnaouti",
    number: 1,
    position: "Gardien de but",
    nationality: "Maroc",
    image: "https://static.lematin.ma/files/lematin/images/articles/2023/08/154c0642f09bc49dcf59b6f2c23cb775.jpg",
    stats: {
      cleanSheets: 12,
      saves: 45,
      matchs: 30
    }
  },
  {
    id: 12,
    name: "Mohamed Ounajem",
    number: 11,
    position: "Ailier gauche",
    nationality: "Maroc",
    image: "https://africafoot.com/wp-content/uploads/2024/05/Mohamed-Ounajem.webp",
    stats: {
      buts: 2,
      passes: 7,
      matchs: 28
    }
  },
  {
    id: 13,
    name: "Mohamed Nahiri",
    number: 6,
    position: "Défenseur central",
    image: "https://aujourdhui.ma/wp-content/uploads/2020/10/Mohamed-Nahiri.jpg",
    stats: {
      buts: 1,
      passes: 0,
      matchs: 30
    }
  },
  {
    id: 14,
    name: "Issmail Elhadad",
    number: 11,
    position: "Ailier gauche",
    image: "https://sport.le360.ma/resizer/v2/7MDLCAJANBMOXFVC6O3W4CT5XM.jpg?auth=49bbf8b011cb96912fdfeb698fb4618117368a45a63ec494fb18ff8be8e25a83&smart=true&width=1216&height=684",
    stats: {
      buts: 15,
      passes: 7,
      matchs: 28
    }
  },
  {
    id: 15,
    name: "Achraf Bencherki",
    number: 8,
    position: "Milieu offensif",
    image: "https://sport.le360.ma/resizer/v2/7QATROMRMJI7NARNBJFBMQDK2Q.jpg?auth=3fa239de2268114f47f8b2801607b1e1af488f74a436e93c9575e32a55674408&smart=true&width=1216&height=684",
    stats: {
      buts: 15,
      passes: 5,
      matchs: 30
    }
  },
  {
    id: 16,
    name: "Ibrahim Nakach",
    number: 6,
    position: "Défenseur central",
    image: "https://sport.le360.ma/resizer/v2/OSWOLRZ6YFN7JINJLWHPCNIRXU.jpg?auth=2df46209a4f553ff2dbcce386bf952c125c45601f1e11a515f6b3e67d0b037ac&smart=true&width=1216&height=684",
    stats: {
      buts: 1,
      passes: 0,
      matchs: 30
    }
  },
  {
    id: 17,
    name: "Salahdine Saidi",
    number: 16,
    position: "milieu défensif",
    image: "https://sport.le360.ma/resizer/v2/OMAAEJM3FVOE3KDOVC3X63F6WI.jpg?auth=ef03de42a24425dc563a0658ecdb2c24993d3a1689c36287d6ef32f5638d3cad&smart=true&width=1216&height=684",
    stats: {
      buts: 4,
      passes: 3,
      matchs: 30
    }
  },
  {
    id: 18,
    name: "Abdellatif Noussir",
    number: 2,
    position: "Arrière droit",
    image: "https://sport.le360.ma/resizer/v2/FJOXQO6YMNJONFBAFEOPEPIKCM.jpg?auth=d47def8c89551723ca8ef8f3dc232b0e3392e235a9b6261061fb50b77e7a3c38&smart=true&width=1216&height=684",
    stats: {
      buts: 1,
      passes: 1,
      matchs: 30
    }
  },




];

export default players;