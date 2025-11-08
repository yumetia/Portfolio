import React from "react";
import shared from "../locales/shared";

export type Skills = {
  id: string | number;
  name: string;
  image: string;
  level?: number; 
};

interface Props {
  skills: Skills[];
  className?: string;
}

const Skills: React.FC<Props> = ({ skills, className = "" }) => {
  if (!skills?.length) return null;

  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s.id}
            className="group bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 font-medium">{s.name}</div>

              {typeof s.level === "number" && (
                <div className="mt-2 w-full">
                  <progress
                    className="progress progress-accent h-1.5 w-full"
                    value={s.level}
                    max={100}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
