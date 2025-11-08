import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Experiences() {
  const { language } = useLanguage();
  const { title, data: experiences } = languages[language].experiences;

  return (
    <div className="mt-10" id="Experiences">
      <Title title={title} />

      <div className="mt-10 mx-auto md:w-full">
        <Swiper
          effect="cards"
          grabCursor
          autoHeight
          modules={[EffectCards, Pagination, Navigation]}
          pagination={{ clickable: true }}
          watchOverflow={true}
          centeredSlides={true}
          className="w-1/2 flex justify-center"
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.id} className=" flex justify-center ">
              <div className="bg-base-200 p-10 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={exp.image}
                    alt={exp.name ?? exp.at}
                    className="h-10 w-10 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-accent">{exp.role}</h2>
                    <p className="text-xs text-base-content/60">{exp.at}</p>
                  </div>
                </div>

                <p className="ml-14 mt-1 text-sm">{exp.period}</p>

                <ul className="ml-14 mt-4 space-y-2 max-h-56 overflow-y-auto pr-2">
                  {exp.description.map((d, i) => (
                    <li key={i} className="list-disc">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

