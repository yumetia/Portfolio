import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

import Title from "./Title";
import { useLanguage } from "@context/LanguageContext";
import languages from "@locales/languages";

import { BookOpen, Play } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { useEffect, useState } from "react";

import github from "@assets/institutions/github.png"
import RncpModal from "./modals/RncpModal";
import { sanityProjects } from "@lib/sanity";

// sanity projects



const Projects = () => {
  const [sProjects, setSProjects] = useState<any[]>([])

  useEffect(() => {
    sanityProjects().then(setSProjects)
  }, [])
  const { language } = useLanguage();
  const lang = language ; 

  const { title,  modalTitle,modalClose} = languages[lang].projects ;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [projectId,setProjectId] = useState<number | undefined>();

  const handleOpenModal = (pId:number) => {
    setProjectId(pId)
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  console.log("projects fetched:",sProjects)
  return (
    <div className="mt-10" id="Projects">
      <Title title={title} />

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
             return `
                <span class="${className} 
                  w-3 h-3 rounded-full 
                  bg-primary/40 
                  transition-all duration-300">
                </span>
              `;
          },
        }}
        className="mx-auto my-10 w-80 
        md:w-2/3 lg:w-1/2 
        select-none"
      >
        {sProjects.map((project: any,pId:number) => {
          const images = project.image ?? [];  

          // shared or localized
          const description = project.description ?? [];

          // shared or localized
          const technologies = project.tech ?? []
          
          return (
            <SwiperSlide key={project.id}>
              <div className="bg-base-300 p-5 rounded-xl shadow-lg">
                  <ImageCarousel
                    images={images}
                    // name of the project is decided in eng for now..
                    alt={project.title["en"]}
                    className="h-full mb-3"
                    interval={4000}
                  />

                <div>
                  <h1 className="my-2 font-bold">{project.title["en"]}</h1>
                  <p className="text-sm lg:w-7/8">{description[lang]}</p>
                </div>

                <div className="flex flex-wrap gap-2 my-3">
                  {/* tech name in eng as default (obvious, but i just wanna remind it here) */}
                   {technologies.map((tech: string, idx: number) => (
                      <div key={idx} className="badge badge-accent badge-sm ring-1">
                        {tech}
                      </div>
                    ))}
                </div>

                {/* infos: rncpModal button */}
                <div className="absolute 
                right-8
                bottom-18
                md:p-2 ml-auto cursor-pointer rounded border-neutral mr-2
                transition duration-300 hover:bg-neutral
                md:mr-5">
                    <BookOpen className="mx-auto size-8 text-info
                    md:mb-auto 
                    md:mb-3" 
                    onClick={()=> handleOpenModal(pId)} />
                </div>

                <div className="flex">
                  {project.demo && (
                    <a
                      className="btn btn-accent border-neutral rounded w-2/3"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Play strokeWidth={1.7} className="size-6" />
                    </a>
                  )}
                  <a
                    className={`btn btn-neutral border-neutral rounded ${
                      project.demo ? "w-1/3 ml-2" : "w-full"
                    }`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github" className="size-5" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        {/* rncp modal */}
          <RncpModal 
            language={language}
            modalTitle={modalTitle}
            modalClose={modalClose}
            projectId={projectId}
            isVisible={isModalVisible}
            onClose={handleCloseModal}
          />
      </Swiper>
    </div>
  );
}

export default Projects;
