import shared from "../locales/shared";
import Title from "./Title";
import languages from "../locales/languages";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  const title = languages[language].navbar.skills;
  const categories = shared.skills;
  const categoryLabels = languages[language].skillsSection;

  if (!categories?.length) return null;

  return (
    <div className="mt-20 px-6" id="Skills">
      <Title title={title} />

      <div className="mt-12 space-y-12">
        {categories.map((category) => (

          <div key={category.id}>

            {/* Category Title */}
            <h3 className="text-2xl font-bold mb-6 text-accent text-center">
              {categoryLabels[category.key]}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 
            md:grid-cols-3
            lg:flex lg:justify-center  
            gap-6">
              {category.skills.map((skill) => (

                // container card
                <div
                  key={skill.id}
                  className="lg:w-96 bg-base-200 rounded-xl p-6 shadow 
                  hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-accent overflow-hidden">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="mt-3 font-medium text-sm text-center">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
