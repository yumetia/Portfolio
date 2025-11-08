 // Technos logos

import imgREACT from "../assets/technos/react.png";
import imgNODE from "../assets/technos/node-js.png";
import imgTAILWIND from "../assets/technos/tailwind.png";
import imgPYTHON from "../assets/technos/python.png";
import imgSYMFONY from "../assets/technos/symfony.png";
import imgLARAVEL from "../assets/technos/laravel.png";
import imgMYSQL from "../assets/technos/mysql.png";
import imgMONGODB from "../assets/technos/mongodb.png";
 
export interface Skill {
    id:number,
    name:string,
    image: string
}
export const shared = {
    skills: [
    { id: 5, name: "React", image: imgREACT },
    { id: 6, name: "Node.js", image: imgNODE },
    { id: 8, name: "Symfony", image: imgSYMFONY },
    { id: 9, name: "Laravel", image: imgLARAVEL },
    { id: 10, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 13, name: "MySQL", image: imgMYSQL },
    { id: 14, name: "MongoDB", image: imgMONGODB },
    { id: 15, name: "Python", image: imgPYTHON },
  ], 
} satisfies {skills: Skill[]}
export default shared;