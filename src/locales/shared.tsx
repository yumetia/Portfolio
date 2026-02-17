 // Technos logos

import imgREACT from "@assets/technos/react.png";
import imgNODE from "@assets/technos/node-js.png";
import imgPYTHON from "@assets/technos/python.png";

import imgLARAVEL from "@assets/technos/laravel.png";
import imgMYSQL from "@assets/technos/mysql.png";
import imgMONGODB from "@assets/technos/mongodb.png";
import imgDocker from "@assets/technos/docker.png";
import imgPostgre from "@assets/technos/postgre.png";

 
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

export const shared = {
  skills: [
    {
      id: 1,
      key: "web",
      skills: [
        { id: 1, name: "React / React Native", image: imgREACT },
        { id: 2, name: "Node.js", image: imgNODE },
        { id: 4, name: "Laravel", image: imgLARAVEL },
      ],
    },
    {
      id: 2,
      key: "software",
      skills: [
        { id: 3, name: "Python", image: imgPYTHON },
        { id: 5, name: "Docker", image: imgDocker },
      ],
    },
    {
      id: 3,
      key: "database",
      skills: [
        { id: 6, name: "MySQL", image: imgMYSQL },
        { id: 7, name: "MongoDB", image: imgMONGODB },
        { id: 8, name: "PostgreSQL", image: imgPostgre },
      ],
    },
  ],
} satisfies { skills: SkillCategory[] };

export default shared;
