import shared from "../locales/shared";
import Title from "./Title";
import languages from "../locales/languages";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const {language} = useLanguage();
  const title = languages[language].navbar.skills
  const skills = shared.skills;

  if (!skills?.length) return null;

  return (
    <div className="mt-10" id="Skills">
      <Title title={title}/>
      <div className="mt-10 grid grid-cols-2 gap-4">
        {skills.map((s) => (
          <div
            key={s.id}
            className="group bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
