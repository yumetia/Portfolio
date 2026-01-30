
import type { Rncp} from "./Rncp";


// mappping rncp with known words, to rncp codes 

export const mappingRncp = (rncpTab: Rncp[]) => [
  { label: "Cahier Des Charges", rncp: rncpTab[0] },
  { label: "Spécifications Techniques", rncp: rncpTab[1] },
  { label: "Environnement de Travail", rncp: rncpTab[2] },
  { label: "Maquette", rncp: rncpTab[3] },
  { label: "Architecture de la Solution Web", rncp: rncpTab[4] },
  { label: "Présentation Technique", rncp: rncpTab[5] },
  { label: "Prototype de la Solution Web", rncp: rncpTab[6] },
];
export default mappingRncp;