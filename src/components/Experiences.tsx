import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages, { getLocalized, type Locale } from "../locales/languages";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { CornerDownLeft, CornerDownRight } from "lucide-react";



export default function Experiences() {
  const { language } = useLanguage();
  const lang = language as Locale;

  const { title, data: experiences } = languages[lang].experiences;

  return (
    <div className="mt-10" id="Experiences">
      <Title title={title} />

      <div className="mt-10 mx-auto md:w-full">
        <Swiper
          effect="cards"
          grabCursor
          autoHeight
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          watchOverflow={true}
          className="flex justify-center md:w-1/2 lg:w-2/3"
          navigation={{
            prevEl:".custom-prev",
            nextEl:".custom-next",
            disabledClass:"swiper-button-disabled"
          }}
        >
          {experiences.map((exp: any) => {
            const role = getLocalized<string>(exp, "role", lang);
            const at = getLocalized<string>(exp, "at", lang);
            const name = getLocalized<string>(exp, "name", lang);
            const description =
              getLocalized<string[]>(exp, "description", lang) ?? [];

            return (
              <SwiperSlide key={exp.id} className="flex justify-center">
                <div className="bg-base-200 p-10 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 w-full mb-2">
                    <img
                      src={exp.image}
                      alt={name ?? at}
                      className="h-10 w-10 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-accent">{role}</h2>
                      <p className="text-xs text-base-content/60">{at}</p>
                    </div>
                  </div>

                  <p className="ml-14 mt-1 text-sm">{exp.period}</p>

                  <ul className="ml-14 mt-4 space-y-2 overflow-y-auto pr-2">
                    {description.map((d, i) => (
                      <li key={i} className="list-disc">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}

          {/* buttons */}
          <button className="btn custom-prev absolute 
          left-5 top-1/2 z-10">
            <CornerDownLeft />
          </button>

          <button className="btn custom-next absolute 
          right-5 top-1/2 z-10
          swiper-button-disabled:hidden">
            <CornerDownRight />
          </button>
        </Swiper>
      </div>
    </div>
  );
}
