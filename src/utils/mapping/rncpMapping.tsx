// rncpMapping.tsx

import type { RncpId } from "../Rncp";

export interface RncpMappingItem {
  id: string;
  rncp: RncpId;
}

export const RNCP_MAPPING: RncpMappingItem[] = [
  { id: "cdc", rncp: "RNCP01-1" },
  { id: "spec-tech", rncp: "RNCP01-2" },
  { id: "env-work", rncp: "RNCP01-3" },
  { id: "mockup", rncp: "RNCP01-4" },
  { id: "architecture", rncp: "RNCP01-5" },
  { id: "presentation", rncp: "RNCP01-6" },
  { id: "prototype", rncp: "RNCP02-1" },
];

export default RNCP_MAPPING;