// components/About.tsx
import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages, { getLocalized, type Locale } from "../locales/languages";

function About() {
  const { language } = useLanguage();
  const lang = language as Locale;

  const { title, sections } = languages[lang].about;

  return (
    <div id="About" className="bg-base-300 p-12">
      <Title title={title} />

      <div className="flex justify-center items-center">
        <div className="md:flex space-y-4 gap-4">
          {sections.map((section: any) => {
            // ✅ NEW: localized fields
            const sectionTitle = getLocalized<string>(
              section,
              "title",
              lang
            );
            const sectionDescription = getLocalized<string>(
              section,
              "description",
              lang
            );

            return (
              <div
                key={section.id}
                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
              >
                <div className="mb-2 md:mb-0">{section.icon}</div>

                <div className="md:ml-4 text-center md:text-left">
                  {/* ✅ CHANGED */}
                  <h2 className="text-xl font-bold mb-1">
                    {sectionTitle}
                  </h2>

                  {/* ✅ CHANGED */}
                  <p className="text-sm">{sectionDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
