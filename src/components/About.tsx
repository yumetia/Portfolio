// components/About.tsx
import Title from "./Title";
import img from "../assets/aboutpp.jpeg";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

function About() {
  const { language } = useLanguage();
  const { title, sections } = languages[language].about;

  return (
    <div id="About" className="bg-base-300 p-12">
      <Title title={title} />
      <div className="flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={img}
            alt="profile"
            className="w-96 h-112 object-cover border-8 border-accent rounded-xl"
          />
        </div>
        <div className="md:ml-4 space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
