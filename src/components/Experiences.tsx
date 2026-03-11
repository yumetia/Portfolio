import Title from "./Title";
import { useLanguage } from "@context/LanguageContext";
import languages, { getLocalized } from "@locales/languages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { CornerDownLeft, CornerDownRight } from "lucide-react";
import { sanityExperiences } from "@lib/sanity";
import { useEffect, useState } from "react";



export default function Experiences() {

  const [sExperiences, setSExperiences] = useState<any[]>([])

  useEffect(() => {
    sanityExperiences().then(setSExperiences)
  }, [])
  
  const { language } = useLanguage();
  const lang = language;

  const { title } = languages[lang].experiences;

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
          className="flex justify-center w-80
          md:w-2/3
          lg:w-1/2
          select-none"
          navigation={{
            prevEl:".custom-prev",
            nextEl:".custom-next",
            disabledClass:"swiper-button-disabled"
          }}
        >
          {sExperiences.map((exp: any) => {
            const role = exp?.role[lang];
            const at = exp?.at;
            const description = exp?.description[lang] ?? []
            
            return (
              <SwiperSlide key={exp.id} className="flex justify-center">
                <div className="bg-base-200 p-10 rounded-xl shadow-lg">

                  {/* header block */}
                  <div className="flex items-center gap-4 w-full mb-2 
                  lg:gap-6">
                    <img
                      src={exp.image?.asset?.url}
                      alt={at}
                      className="size-10 object-cover rounded
                      lg:size-12"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-2sm font-bold text-accent 
                      [text-shadow:2px_1px_theme(colors.neutral)]
                      lg:text-xl lg:mb-1">{role}</h2>
                      <p className="text-xs text-base-content/60
                      md:text-sm">{at}</p>
                    </div>
                </div>

                {/* period & description */}
                    <div className="ml-2 lg:ml-17">

                      <p className="ml-12 mt-1 text-xs
                      md:text-sm
                      lg:ml-1
                      ">{exp.period[lang]}
                      </p>

                      <ul className="list-disc list-inside mt-4 space-y-2 overflow-y-auto
                      md:ml-5
                      lg:ml-1
                      ">
                        {description.map((d:string, i:number) => (
                          <li key={i} className="
                          sm:text-sm
                          md:text-base
                          lg:text-lg">
                            {d}
                          </li>
                        ))}
                      </ul>

                    </div>

                </div>
              </SwiperSlide>
            );
          })}

          {/* buttons */}
          <button className="btn bg-transparent custom-prev absolute 
          left-1 top-1/2 z-10
          lg:left-5
          p-1 md:p-2 lg:p-3
          [&.swiper-button-disabled]:hidden">
            <CornerDownLeft className="size-5 text-primary
            md:size-auto"/>
          </button>

          <button className="btn bg-transparent custom-next absolute 
          right-1 top-1/2 z-10
          lg:right-5
          p-1 md:p-2 lg:p-3
          [&.swiper-button-disabled]:hidden">
            <CornerDownRight className="size-5 text-primary
            md:size-auto"/>
          </button>
        </Swiper>
      </div>
    </div>
  );
}
