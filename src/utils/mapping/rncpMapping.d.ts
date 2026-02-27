import type { RncpId } from "../Rncp";
export interface RncpMappingItem {
    id: string;
    rncp: RncpId;
}
export declare const RNCP_MAPPING: RncpMappingItem[];
export default RNCP_MAPPING;
