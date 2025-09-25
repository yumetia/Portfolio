import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";
import { Github, Video } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

function Projects() {
  const { language } = useLanguage();
  const { title, data } = languages[language].projects;
  const play = language === "fr" ? "Jouer" : "Play";

  return (
    <div className="mt-10" id="Projects">
      <Title title={title} />
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((project: any) => {
          const images: string[] = project.images ?? [];
          return (
            <div
              key={project.id}
              className="bg-base-300 p-5 h-fit rounded-xl shadow-lg max-w-sm mx-auto"
            >
              {images.length > 0 ? (
                <ImageCarousel images={images} alt={project.title} className="mb-3" autoPlay interval={4000} loop />
              ) : (
                <div className="mb-3 w-full h-96 rounded-xl bg-base-200 grid place-items-center text-base-content/60">
                  No image
                </div>
              )}

              <div>
                <h1 className="my-2 font-bold">{project.title}</h1>
                <p className="text-sm">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech: string, idx: number) => (
                  <span key={idx} className="badge badge-accent badge-sm">
                    {tech}
                  </span>
                ))}
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
                    project.demoLink && project.demoLink !== "#" ? "w-1/3 ml-2" : "w-full"
                  }`}
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
