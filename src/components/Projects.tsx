import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

import Title from "./Title";
import { useLanguage } from "@context/LanguageContext";
import languages, { getLocalized } from "@locales/languages";

import { Info, Video } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";

import github from "@assets/institutions/github.png"
import RncpModal from "./modals/RncpModal";


const Projects = () => {
  const { language } = useLanguage();
  const lang = language ; 

  const { title, data, modalTitle,modalClose,play} = languages[lang].projects ;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [projectId,setProjectId] = useState<number | undefined>();

  const handleOpenModal = (projectId:number) => {
    setProjectId(projectId)
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  return (
    <div className="mt-10" id="Projects">
      <Title title={title} />

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className="mx-auto my-10 w-80 
        md:w-2/3 lg:w-1/2 "
      >
        {data.map((project: any) => {
          const images: string[] = project.images ?? [];

          // shared or localized
          const description = getLocalized<string>(project, "description", lang);

          // shared or localized
          const technologies = getLocalized<string[]>(project,"technologies",lang) ?? []

          return (
            <SwiperSlide key={project.id}>
              <div className="bg-base-300 p-5 rounded-xl shadow-lg">
                  <ImageCarousel
                    images={images}
                    alt={project.title}
                    className="h-full mb-3"
                    interval={4000}
                  />

                <div>
                  <h1 className="my-2 font-bold">{project.title}</h1>
                  <p className="text-sm">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2 my-3">
                  {technologies.map((tech: string, idx: number) => (
                    <span key={idx} className="badge badge-accent badge-sm">
                      {tech}
                    </span>
                  ))}

                  <div className="ml-auto cursor-pointer">
                    <Info onClick={()=> handleOpenModal(project.id)} />
                  </div>
                </div>

                <div className="flex">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      className="btn btn-accent w-2/3"
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {play}
                      <Video className="w-4" />
                    </a>
                  )}
                  <a
                    className={`btn btn-neutral ${
                      project.demoLink && project.demoLink !== "#"
                        ? "w-1/3 ml-2"
                        : "w-full"
                    }`}
                    href={project.repoLink}
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
