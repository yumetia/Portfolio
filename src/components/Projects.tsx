import Title from "./Title";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";
import { Github, Video } from "lucide-react";

function Projects() {
  const { language } = useLanguage();
  const { title, data } = languages[language].projects;

  return (
    <div className="mt-10" id="Projects">
      <Title title={title} />
      <div className="grid md:grid-cols-3 gap-4">
        {data.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 rounded-xl object-contain"
            />
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a className="btn btn-accent w-2/3" href={project.demoLink} target="_blank">
                Demo
                <Video className="w-4" />
              </a>
              <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink} target="_blank">
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
