
import type { Rncp} from "./Rncp";


// mappping rncp with known words, to rncp codes 

export const mappingRncp = (rncpTab: Rncp[]) =>[
  {
    label: "Cahier Des Charges",
    rncp: rncpTab[0],
    reference:
      "Rédaction d’un Cahier Des Charges à partir d’une expression de besoins afin de cadrer fonctionnellement le projet web."
  },
  {
    label: "Spécifications Techniques",
    rncp: rncpTab[1],
    reference:
      "Rédaction des spécifications techniques en analysant le Cahier Des Charges pour cadrer techniquement le projet."
  },
  {
    label: "Environnement de Travail",
    rncp: rncpTab[2],
    reference:
      "Déploiement de l’environnement de travail avec les outils de versionnage, de partage et de collaboration."
  },
  {
    label: "Maquette",
    rncp: rncpTab[3],
    reference:
      "Réalisation d’une maquette permettant de valider la structure de la solution web dans le respect de l’ergonomie et de l’accessibilité."
  },
  {
    label: "Architecture de la Solution Web",
    rncp: rncpTab[4],
    reference:
      "Identification des fonctionnalités et modélisation des éléments afin de structurer l’architecture de la solution web et de la base de données."
  },
  {
    label: "Présentation Technique",
    rncp: rncpTab[5],
    reference:
      "Rédaction d’une présentation argumentée des choix techniques, des maquettes et du schéma de la solution pour validation."
  },
  {
    label: "Prototype de la Solution Web",
    rncp: rncpTab[6],
    reference:
      "Développement du prototype afin de présenter l’architecture technique de la solution web."
  }
]

export default mappingRncp;