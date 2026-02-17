// components/About.tsx
import Title from "./Title";
import { useLanguage } from "@context/LanguageContext";
import languages, { getLocalized, type Locale } from "@locales/languages";

function About() {
  const { language } = useLanguage();
  const lang = language as Locale;

  const { title, sections } = languages[lang].about;

  return (
    <div id="About" className="bg-base-300 p-12">
      <Title title={title} />
      <div className="sm:grid sm:grid-cols-2 
      md:flex md:justify-center
      lg:gap-16
      gap-4 ">
        {sections.map((section: any) => {
          //  NEW: localized fields
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

          const Icon = section.icon;

          return (

          // container cards
          <div
              key={section.id}
              className="mt-4 bg-base-100 p-5 rounded-xl 
              md:size-full
              lg:w-96
              shadow-xl"
            >

          {/* card */}
              
            <div className="flex flex-col">
              <div className="flex justify-between
              lg:mb-3">
                <Icon className="text-accent size-6 
                lg:size-8
                "/>
                <h2 className="text-xl font-bold mb-1 text-center w-full
                lg:text-2xl
                ">
                  {sectionTitle}
                </h2>
              </div>

              <div className="mx-auto size-full">
                <p className="text-xs text-center
                md:text-sm
                lg:text-lg
                ">{sectionDescription}</p>
              </div>
            </div>
          </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default About;
