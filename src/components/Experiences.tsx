// components/Experiences.tsx
import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

function Experiences() {
  // current lang
  const { language } = useLanguage();

  // Experience content
  const { title, skills, data } = languages[language].experiences;

  return (
    <div className="mt-10" id="Experiences">
      <Title title={title} />

      <div className="flex flex-col justify-center md:gap-10 md:flex-row mt-18">
        {/* Affichage des compétences */}
        <div className="grid grid-cols-2 content-center sm:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col h-1/8">
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Affichage des expériences */}
        <div className="w-full md:max-w-[50%]">
          {data.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col h-fit justify-center bg-base-200 p-5 rounded-xl mb-5"
            >
              <div className="flex items-center w-fit gap-6">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="object-cover h-10 w-10"
                />
                <div>
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}
                  </h1>
                  <h3 className="text-xl font-italic text-gray-500 text-xs">
                    {experience.at}
                  </h3>
                </div>
              </div>
              <div className="ml-16">
                <span className="text-sm">{experience.period}</span>
              </div>
              <ul className="list-disc ml-16 mt-4 mb-10">
                {experience.description.map((desc: string, idx: number) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
