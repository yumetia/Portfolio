export interface Skill {
    id: number;
    name: string;
    image: string;
}
export interface SkillCategory {
    id: number;
    key: "software" | "web" | "database" | "game";
    skills: Skill[];
}
export declare const shared: {
    skills: ({
        id: number;
        key: "web";
        skills: {
            id: number;
            name: string;
            image: string;
        }[];
    } | {
        id: number;
        key: "software";
        skills: {
            id: number;
            name: string;
            image: string;
        }[];
    } | {
        id: number;
        key: "database";
        skills: {
            id: number;
            name: string;
            image: string;
        }[];
    })[];
};
export default shared;
