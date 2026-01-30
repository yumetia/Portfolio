import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages, { getLocalized, type Locale } from "../locales/languages";

import { Github, Info, Video } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";

// rncp
import mappingRncp from "../utils/mappingRncp";
import RNCP_DATA from "../utils/Rncp";

function Projects() {
  const { language } = useLanguage();
  const lang = language as Locale; // ensure "en" | "fr"

  const { title, data } = languages[lang].projects;
  const play = lang === "fr" ? "Jouer" : "Play";

  const [projectId, setProjectId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOnClickInfo = (projectId: number) => {
    setProjectId(projectId);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const rncpMap = mappingRncp(RNCP_DATA);

  return (
    <div className="mt-10" id="Projects">
      <Title title={title} />

      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className="w-full md:w-1/2 mx-auto my-10"
      >
        {data.map((project: any) => {
          const images: string[] = project.images ?? [];

          // ✅ NEW: localize description (description_en / description_fr)
          const description = getLocalized<string>(project, "description", lang);

          // ✅ NEW: technologies can be shared OR localized
          const technologies: string[] =
            project[`technologies_${lang}`] ?? project.technologies ?? [];

          return (
            <SwiperSlide key={project.id}>
              <div className="bg-base-300 p-5 rounded-xl shadow-lg">
                {images.length > 0 ? (
                  <ImageCarousel
                    images={images}
                    alt={project.title}
                    className="h-fullbmb-3"
                    autoPlay
                    interval={4000}
                  />
                ) : (
                  <div className="mb-3 w-full h-96 rounded-xl bg-base-200 grid place-items-center text-base-content/60">
                    No image
                  </div>
                )}

                <div>
                  <h1 className="my-2 font-bold">{project.title}</h1>
                  {/* ✅ CHANGED */}
                  <p className="text-sm">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2 my-3">
                  {/* ✅ CHANGED */}
                  {technologies.map((tech: string, idx: number) => (
                    <span key={idx} className="badge badge-accent badge-sm">
                      {tech}
                    </span>
                  ))}

                  <div className="ml-auto cursor-pointer">
                    <Info onClick={() => handleOnClickInfo(project.id)} />
                  </div>
                </div>

                {isModalVisible && projectId === project.id && (
                  <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 bg-black/50"
                      onClick={handleCloseModal}
                    />

                    {/* Modal */}
                    <div
                      className="
                        relative
                        w-full md:w-[28rem]
                        max-h-[85vh]
                        bg-base-100 text-base-content
                        rounded-t-2xl md:rounded-2xl
                        p-4 md:p-6
                        overflow-y-auto
                        animate-slide-up
                      "
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">
                          {lang === "fr"
                            ? "Compétences acquises (RNCP)"
                            : "Skills acquired (RNCP)"}
                        </h3>
                        <button
                          className="btn btn-sm btn-circle btn-ghost"
                          onClick={handleCloseModal}
                        >
                          ✕
                        </button>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        {project.rncp?.map((rncpLabel: string) => {
                          const match = rncpMap.find(
                            (item) => item.label === rncpLabel
                          );
                          if (!match || !match.rncp) return null;

                          return (
                            <div
                              key={rncpLabel}
                              className="rounded-lg bg-base-200 p-3"
                            >
                              <h4 className="font-semibold text-sm mb-1">
                                {match.rncp.code}
                              </h4>
                              <p className="text-xs leading-snug opacity-80 line-clamp-3">
                                {lang === "en"
                                  ? match.rncp.description_en
                                  : match.rncp.description_fr}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer */}
                      <div className="mt-4 flex justify-center">
                        <button
                          className="btn btn-primary btn-sm w-full md:w-auto"
                          onClick={handleCloseModal}
                        >
                          {lang === "fr" ? "Fermer" : "Close"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

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
                    <Github className="w-4" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Projects;
